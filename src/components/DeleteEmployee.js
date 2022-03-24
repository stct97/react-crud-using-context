import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { GlobalContext } from "../contexts/GlobalState";

export const DeleteEmployee = (props) => {
    const history = useNavigate();
    const { deleteEmployee, employees } = useContext(GlobalContext);
    return (
        <>
            <button type="submit" value="Delete Employee" onClick={(e) => {
                e.preventDefault();
                deleteEmployee(props.id);
                history("/");
            }} className="btn btn-danger" >X</button>
        </>
    )
}