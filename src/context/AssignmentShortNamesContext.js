import React, { createContext, useContext } from "react";
import { AssignmentNamesContext } from "./AssignmentNamesContext";

export const AssignmentShortNamesContext = createContext();

export const AssignmentShortNamesContextProvider = (props) => {
    const assignments = useContext(AssignmentNamesContext);
    const assignmentNames = assignments.map((assignment) => assignment.split(' ').splice(0, 3).join(''));

    return (
        <AssignmentShortNamesContext.Provider
            value={assignmentNames}
        >
            {props.children}
        </AssignmentShortNamesContext.Provider>
    );
}