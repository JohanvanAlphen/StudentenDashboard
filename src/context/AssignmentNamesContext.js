import React, { createContext } from "react";
import studentsData from "../data/studentsData";

export const AssignmentNamesContext = createContext();

export const AssignmentNamesContextProvider = (props) => {
    const assignmentsArray = studentsData.map((assignment) => {
        return assignment['Welke opdracht of welk project lever je nu in?'];
    });
    const assignments = [...new Set(assignmentsArray)];

    return (
        <AssignmentNamesContext.Provider
            value={assignments}
        >
            {props.children}
        </AssignmentNamesContext.Provider>
    );
}