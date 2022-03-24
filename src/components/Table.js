import React, { useContext, useState } from "react";
import { GlobalContext } from "../contexts/GlobalState";
import { AddEmployee } from "./AddEmployee";
import { DeleteEmployee } from "./DeleteEmployee";
// import { EditEmployee } from "./EditEmployee";

const Table = () => {
    const { employees } = useContext(GlobalContext);
    const { editEmployee } = useContext(GlobalContext);

    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState("");
    const [handle, setHandle] = useState("");

    return (
        <>
            <AddEmployee />
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Handle</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => {
                        return (
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td><input defaultValue={employee.firstName} onChange={(e) => { setFirstName(e.target.value) }} /></td>
                                <td><input defaultValue={employee.lastName} /></td>
                                <td><input defaultValue={employee.handle} /></td>
                                <td>
                                    <div className="row">
                                        <div className="col">
                                            <button type="button" className="btn btn-success"
                                                onClick={(e) => editEmployee(employee = {
                                                    id: employee.id,
                                                    firstName: firstName,
                                                    lastName: lastName,
                                                    handle: handle
                                                })}>
                                                X</button>
                                        </div>
                                        <div className="col">
                                            <DeleteEmployee id={employee.id} />
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>

    )
}


export default Table;