import React, { useContext } from "react";
import { AssignmentContext } from "../context/AssignmentContext";
import { AssignmentNamesContext } from "../context/AssignmentNamesContext";

function Dropdown() {
    const assignments = useContext(AssignmentNamesContext);
    const [assignment, setAssignment] = useContext(AssignmentContext); // eslint-disable-line

    const handleChange = (e) => {
        setAssignment(e.target.value);
    }
    return (
        <div className="dropdown">
            <form>
                <div>Kies een opdracht: </div>
                <select onChange={handleChange}>
                    <option hidden>Selecteer...</option>
                    {assignments.map((item) => (
                        <option value={item} key={item}>
                            {item}
                        </option>
                    ))}
                </select>
            </form>
        </div>
    );
};

export default Dropdown