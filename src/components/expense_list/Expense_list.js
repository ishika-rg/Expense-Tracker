import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import "./Expense_list.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Expense_list = () => {
  const notifyDelete = () => toast.success("Expense Deleted !");

  // to get expense list from expense state, we use useSelector hook
  // useSelector takes in 1 arguments : arow function

  const expenses = useSelector((state) => state.expenses);
  console.log(expenses);
  console.log(expenses.expenseList.length);

  const list = expenses.expenseList;

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
    <div className="container">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />

      <ToastContainer />

      <div className="expense_list mt-3 px-5 ">
        {list.length === 0 ? (
          <h1> No expenses Added</h1>
        ) : (
          list.map((item) => (
            <Card
              item={item}
              key={item.createdAt}
              notifyDelete={notifyDelete}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default Expense_list;
