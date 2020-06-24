import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "./common/Input";
import Button from "./common/Button";
import { nanoid } from "nanoid";
import { addPlanet, editPlanet } from "../store/actions/planets";
import { getAllPlanets } from "../store/selectors/planets";
import { planetsColumns } from "../services/planetsService";

const initialPlanetData = planetsColumns.reduce((columns, columnName) => {
  columns[columnName] = "";
  return columns;
}, {});

const PlanetsForm = ({ history, match }) => {
  const dispatch = useDispatch();
  const planets = useSelector((state) => getAllPlanets(state));

  const [formErrors, setFormErrors] = useState({});
  const [planetData, setPlanetData] = useState({ ...initialPlanetData });
  const [editMode, setEditMode] = useState(false);

  useEffect(() => {
    const planetId = match.params.id;
    if (planetId === "new") {
      return;
    }
    const existingPlanetData = planets.find((planet) => planet.id === planetId);
    setPlanetData(existingPlanetData);
    setEditMode(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const validate = (data) => {
    // super simple validation
    let errors = {};
    // eslint-disable-next-line array-callback-return
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
    const errors = validate(planetData);

    if (Object.keys(errors).length) {
      return;
    }

    if (editMode) {
      dispatch(editPlanet(planetData));
    } else {
      dispatch(addPlanet({ ...planetData, beloved: false, id: nanoid() }));
    }
    history.push("/");
  };

  const handleChange = (event) => {
    const { currentTarget: input } = event;
    const data = { ...planetData };
    const errors = { ...formErrors };
    if (errors[input.name]) {
      delete errors[input.name];
    }

    data[input.name] = input.value;
    setPlanetData(data);
    setFormErrors(errors);
  };

  return (
    <form>
      {planetsColumns.map((planetsColName) => (
        <Input
          key={planetsColName}
          name={planetsColName}
          label={planetsColName[0].toUpperCase() + planetsColName.slice(1)}
          value={planetData[planetsColName]}
          type={planetsColName === "beloved" ? "checkbox" : "input"}
          error={formErrors[planetsColName]}
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

export default PlanetsForm;
