import { createContext } from "react";
import React from "react";
import studentsData from "../data/studentsData";

export const StudentDataContext = createContext();

export const StudentDataContextProvider = (props) => {
    const data = studentsData;

    return (
        <StudentDataContext.Provider
            value={data}
        >
            {props.children}
        </StudentDataContext.Provider>
    );
}