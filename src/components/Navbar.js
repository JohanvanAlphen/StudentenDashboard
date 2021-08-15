import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li>
                    <Link to="/">Home / Dashboard</Link>
                </li>
                <li>
                    <Link to="/opdrachten">Opdrachten</Link>
                </li>
                <li>
                    <Link to="/table">Data als tabel</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar