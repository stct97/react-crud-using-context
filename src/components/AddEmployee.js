import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

import { GlobalContext } from "../contexts/GlobalState";

export const AddEmployee = () => {
    const history = useNavigate();
    const { addEmployee, employees } = useContext(GlobalContext);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [handle, setHandle] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        const newEmployee = {
            id: employees.length + 1,
            firstName,
            lastName,
            handle
        }
        addEmployee(newEmployee);
        history("/");
    }
    return (
        <>
            <div className="container">
                <h1>Add Employee</h1>
                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label>First Name: </label>
                        <input type="text"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input type="text"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Handle: </label>
                        <input type="text"
                            className="form-control"
                            value={handle}
                            onChange={(e) => setHandle(e.target.value)}
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <input type="submit" value="Add Employee" className="btn btn-primary" />
                    </div>
                </form>
                <hr />
            </div>

        </>
    )
}