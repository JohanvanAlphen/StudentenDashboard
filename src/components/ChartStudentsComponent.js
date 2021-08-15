import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { AssignmentShortNamesContext } from "../context/AssignmentShortNamesContext";
import { StudentDataContext } from "../context/StudentDataContext";
import ChartStudents from "./ChartStudents";


function ChartStudentsComponent() {

    let { id } = useParams();

    const assignmentNames = useContext(AssignmentShortNamesContext);
    const data = useContext(StudentDataContext);

    const gradesByType = (grade) => {
        const grades = data
            .filter((student) => student['Wie ben je?'] === id)
            .map((gr) => gr[`Hoe ${grade} vond je deze opdracht?`]);
        return grades;
    };

    const studentsData = {
        labels: assignmentNames,
        datasets: [
            {
                label: 'Hoe moeilijk vond je deze opdracht?',
                data: gradesByType('moeilijk'),
                backgroundColor: 'rgb(164, 143, 192)',
                hoverBorderColor: "white",
                borderWidth: 2,
            },
            {
                label: 'Hoe leuk vond je deze opdracht?',
                data: gradesByType('leuk'),
                backgroundColor: 'rgb(81, 55, 129)',
                hoverBorderColor: "white",
                borderWidth: 2,
            },
        ],
    };

    return (
        <div className="chart">
            <p>Dit zijn de resultaten van {id}</p>
            <ChartStudents studentsData={studentsData} />
        </div>
    );
};

export default ChartStudentsComponent