import React, { createContext, useState } from "react";

export const AssignmentContext = createContext();

export const AssignmentContextProvider = (props) => {
    const [assignment, setAssignment] = useState("");

    return (
        <AssignmentContext.Provider
            value={[assignment, setAssignment]}
        >
            {props.children}
        </AssignmentContext.Provider>
    );
}

