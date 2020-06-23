import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import Table from '../common/Table';
import { useSelector, useDispatch } from 'react-redux';
import { getStarships } from "../../services/starshipsService";
import { getAllStarships } from '../../store/selectors/starships';
import { deleteStarship, changeStarshipBelovedStatus, setStarships } from '../../store/actions/starships';

const StarshipsPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            const starshipsResponse = await getStarships()
            dispatch(setStarships(starshipsResponse));
        }

        fetchData()
    }, [])

    const starships = useSelector(state => getAllStarships(state));

    const handleBelovedStatus = id => {
        dispatch(changeStarshipBelovedStatus(id));
    }

    const handleDelete = (id) => {
        dispatch(deleteStarship(id));
    }

    const getColumns = () => {
        if (!starships.length) return [];

        return Object.keys(starships[0]).map(colName => {
            if (colName === 'beloved') {
                return {
                    colName,
                    content: ({beloved, id}) => (
                        <input
                            type="checkbox"
                            checked={beloved}
                            onChange={() => handleBelovedStatus(id)}
                        />
                    )
                }
            }
            if (colName === 'name') {
                return {
                    colName,
                    content: ({name, id}) => (
                        <Link style={{color: '#ffc107'}} to={`/starships/${id}`}>{name}</Link>
                    )
                }
            }
            return {colName}
        })
    }

    return (
        <div>
            <h3>Planets from Star Wars Universe</h3>
            <Link
                to={"/starships/new"}
                className="btn btn-warning"
                style={{marginBottom: 25}}
            >
                New Planet
            </Link>
            <Table
                columns={getColumns()}
                data={Object.values(starships)}
                tableDescriptor="Starships"
                onDelete={handleDelete}
            />
        </div>

    );
};

export default StarshipsPage;
