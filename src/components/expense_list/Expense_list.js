import React from 'react'
import Card from './Card'

const Expense_list = () => {

    const list = [
        {
            title : 'dsa',
            createdAt : Date.now(),
            logo : 'img',
            amount : 555
        },
        {
            title : 'dsa',
            createdAt : Date.now(),
            logo : 'img',
            amount : 555
        }
    ]

    console.log(list.length)
  return (
    <div>
        {
            list.length === 0 ? <h1> No expenses Added</h1> :
            list.map((item) => 
                
            <Card item = {item} />
            
            )
        }
    </div>
  )
}

export default Expense_list