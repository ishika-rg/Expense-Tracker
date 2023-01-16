import React from 'react'
import Expense_list from '../../components/expense_list/Expense_list'
import Topfold from '../../components/topfold/Topfold'



const Home = () => {
  return (
    <div className = 'home'>
      <div><Topfold /> </div>
      <div> <Expense_list /> </div>
    </div>
  )
}

export default Home