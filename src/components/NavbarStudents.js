import { Link } from "react-router-dom";
import studentsData from "../data/studentsData";

function NavbarStudents() {
    const studentsArray = studentsData.map((student) => student['Wie ben je?']);
    const students = [...new Set(studentsArray)];

    return (
        <nav className="navbar-students">
            <ul>
                <li>Kies een student:</li>
                {students.map((student) => (
                    <li key={student}>
                        <Link to={`/${student}`}>{student}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default NavbarStudents