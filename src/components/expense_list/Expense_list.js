import React from 'react'
import Card from './Card'
import {useSelector} from 'react-redux'
import './Expense_list.css'

const Expense_list = () => {


    // to get expense list from expense state, we use useSelector hook
    // useSelector takes in 1 arguments : arow function

    const expenses  = useSelector((state) => state.expenses)
    console.log( expenses )
    console.log(expenses.expenseList.length)

    const list = expenses.expenseList

    


    // const list = [
    //     {
    //         title : 'dsa',
    //         createdAt : Date.now(),
    //         logo : 'img',
    //         amount : 555
    //     },
    //     {
    //         title : 'dsa',
    //         createdAt : Date.now(),
    //         logo : 'img',
    //         amount : 555
    //     }
    // ]

    // console.log(list.length)

  return (
    <div className = "container">

<div className = "expense_list mt-3 px-5 ">
        {
            list.length === 0 ? <h1> No expenses Added</h1> :
            list.map((item) => 
                
            <Card item = {item} key =   {item.createdAt} />
            
            )
        }
    </div>

    </div>


  )
}

export default Expense_list