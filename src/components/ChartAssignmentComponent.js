import React, { useContext } from "react";
import { AssignmentContext } from "../context/AssignmentContext";
import { StudentDataContext } from "../context/StudentDataContext";
import ChartAssignments from "./ChartAssignments";
import Dropdown from "./Dropdown";

function ChartAssignmentComponent() {
    const [assignment, setAssignment] = useContext(AssignmentContext); // eslint-disable-line
    const data = useContext(StudentDataContext);

    const studentsArray = data.map((student) => student['Wie ben je?']);
    const students = [...new Set(studentsArray)];

    const getGrades = (grade) => {
        const grades = data
            .filter((asgnmnt) => asgnmnt['Welke opdracht of welk project lever je nu in?'] === assignment)
            .map((gr) => gr[`Hoe ${grade} vond je deze opdracht?`]);
        return grades;
    };

    const dataAssignments = {
        labels: students,
        datasets: [
            {
                label: 'Hoe moeilijk vond je deze opdracht?',
                data: getGrades('moeilijk'),
                backgroundColor: 'rgb(164, 143, 192)',
                hoverBorderColor: "white",
                borderWidth: 2,
            },
            {
                label: 'Hoe leuk vond je deze opdracht?',
                data: getGrades('leuk'),
                backgroundColor: 'rgb(81, 55, 129)',
                hoverBorderColor: "white",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="chart">
            <p>Hier kun je de cijfers per opdracht bekijken</p>
            <Dropdown />
            <ChartAssignments dataAssignments={dataAssignments} />
        </div>
    );
};

export default ChartAssignmentComponent