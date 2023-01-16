import { ADD_EXPENSE, DELETE_EXPENSE } from "../constants/ActionType"







export const add_expense = (data) => {
    return {
        type : ADD_EXPENSE,
        data : data
    }
}

export const delete_expense = (data) => {
    return {
        type : DELETE_EXPENSE,
        data : data
    }
}