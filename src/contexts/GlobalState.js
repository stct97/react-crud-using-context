import React, { createContext, useReducer } from "react";

import IndexReducer from "../reducer/IndexReducer";

const initialState = {
    employees: [
        {
            id: 1,
            firstName: "John",
            lastName: "Doe",
            handle: "@johndoe",
        }
    ]
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(IndexReducer, initialState);

    function addEmployee(employee) {
        dispatch({
            type: "ADD_EMPLOYEE",
            payload: employee
        })
    }

    function editEmployee(employee) {
        dispatch({
            type: "EDIT_EMPLOYEE",
            payload: employee
        })
    }

    function deleteEmployee(id) {
        dispatch({
            type: "DELETE_EMPLOYEE",
            payload: id
        })
    }

    return (
        <GlobalContext.Provider value={{
            employees: state.employees,
            addEmployee,
            editEmployee,
            deleteEmployee
        }}>
            {children}
        </GlobalContext.Provider>
    )
}