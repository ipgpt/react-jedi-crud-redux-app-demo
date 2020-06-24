import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./common/Input";
import Button from "./common/Button";
import { nanoid } from "nanoid";
import { addStarship, editStarship } from "../store/actions/starships";
import { getAllStarships } from "../store/selectors/starships";
import { starshipsColumns } from "../services/starshipsService";

const initialStarshipData = starshipsColumns.reduce((columns, columnName) => {
  columns[columnName] = "";
  return columns;
}, {});

const StarshipsForm = ({ history, match }) => {
  const dispatch = useDispatch();
  const starships = useSelector((state) => getAllStarships(state));

  const [formErrors, setFormErrors] = useState({});
  const [starshipData, setStarshipData] = useState({ ...initialStarshipData });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const starshipId = match.params.id;
    if (starshipId === "new") {
      return;
    }
    const existingStarshipData = starships.find((starship) => starship.id === starshipId);
    setStarshipData(existingStarshipData);
    setEditMode(true);
  }, []);

  const validate = (data) => {
    // super simple validation
    let errors = {};
    Object.entries(data).map(([propKey, propVal]) => {
      if (!propVal && !propKey.includes("beloved")) {
        errors = { ...errors, [propKey]: "Field should not be empty" };
      }
    });
    setFormErrors(errors);
    return errors;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate(starshipData);

    if (Object.keys(errors).length) {
      return;
    }

    if (editMode) {
      dispatch(editStarship(starshipData));
    } else {
      dispatch(addStarship({ ...starshipData, beloved: false, id: nanoid() }));
    }
    history.push("/");
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const data = { ...starshipData };
    const errors = { ...formErrors };
    if (errors[input.name]) {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    setStarshipData(data);
    setFormErrors(errors);
  };

  return (
    <form>
      {starshipsColumns.map((starsipsColName) => (
        <Input
          key={starsipsColName}
          name={starsipsColName}
          label={starsipsColName[0].toUpperCase() + starsipsColName.slice(1)}
          value={starshipData[starsipsColName]}
          type={starsipsColName === "beloved" ? "checkbox" : "input"}
          error={formErrors[starsipsColName]}
          onChange={(event) => handleChange(event)}
        />
      ))}
      <Button
        onClick={(event) => onSubmit(event)}
        label="Save"
        disabled={Object.keys(formErrors).length}
        classes="btn btn-dark"
      />
    </form>
  );
};

export default StarshipsForm;
