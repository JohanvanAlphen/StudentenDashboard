import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Papa from "papaparse";

function Table() {
    const [rows, setRows] = useState(null);

    useEffect(() => {
        Papa.parse("studentDataRaw.csv", {
            download: true,
            header: true,
            complete: data => {
                setRows(data);
            }
        });
    }, []);

    return (
        <div>
            <div className="table">
                <Link to="/">Terug naar Home / Dashboard</Link>
                <table>
                    <tr>{rows?.meta.fields.map(column => <th>{column}</th>)}</tr>
                    {rows?.data.map(row => {
                        return (
                            <tr>
                                <td>{row.name}</td>
                                <td>{row.assignment}</td>
                                <td>{row.difficultRating}</td>
                                <td>{row.funRating}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
};

export default Table
