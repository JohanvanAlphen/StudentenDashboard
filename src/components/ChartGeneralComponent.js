import React, { useContext } from "react";
import { AssignmentNamesContext } from "../context/AssignmentNamesContext";
import { AssignmentShortNamesContext } from "../context/AssignmentShortNamesContext";
import { StudentDataContext } from "../context/StudentDataContext";
import ChartGeneral from "./ChartGeneral";

function ChartGeneralComponent() {

    const assignments = useContext(AssignmentNamesContext);
    const data = useContext(StudentDataContext);
    const assignmentNames = useContext(AssignmentShortNamesContext);

    const getGrades = (name, grade) => {
        const difGrades = data
            .filter((asg) => asg['Welke opdracht of welk project lever je nu in?'] === name)
            .map((gr) => gr[`Hoe ${grade} vond je deze opdracht?`]);

        const averageGrade =
            difGrades.map((grade) => parseInt(grade)).reduce((prevGrade, currentGrade) => prevGrade + currentGrade) /
            difGrades.length;
        return averageGrade;
    };

    const averageAllAssignments = (grade) => {
        return assignments.map((assignment) => getGrades(assignment, grade));
    };

    const dataAverage = {
        labels: assignmentNames,
        datasets: [
            {
                label: 'Hoe moeilijk vond je deze opdracht?',
                data: averageAllAssignments('moeilijk'),
                backgroundColor: 'rgb(164, 143, 192)',
                hoverBorderColor: "white",
                borderWidth: 2,
            },
            {
                label: 'Hoe leuk vond je deze opdracht?',
                data: averageAllAssignments('leuk'),
                backgroundColor: 'rgb(81, 55, 129)',
                hoverBorderColor: "white",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="chart">
            <p>Dit zijn de gemiddelden van alle opdrachten:</p>
            <ChartGeneral dataAverage={dataAverage} />
        </div>
    );
};

export default ChartGeneralComponent