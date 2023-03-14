import React from "react";
import "./Card.css";
import { useDispatch } from "react-redux";
import { delete_expense } from "../../redux/actions/action";
// import Moment from "react-moment";


const Card = ({ item, notifyDelete }) => {
  console.log("from card");
  console.log(item);

  // const time = Moment(item.createdAt).fromNow()

  const dispatch = useDispatch();
  const handleDelete = () => {
    // console.log("Delete button is clicked")
    dispatch(delete_expense(item));
    notifyDelete();
  };

  return (
    <div
      className="card"
      style={{ borderRight: `5px solid ${item.category.color}` }}
    >
      <div className="card_left">
        <div className="card_img">
          <img src={item.category.icon} alt={item.category.title} />
        </div>

        <div className="card_info">
          <p>{item.title}</p>

          {/* <Moment fromNow >  {newTime} </Moment> */}
        </div>
      </div>

      <div className="card_price">
        <p>₹ {item.amount} </p>
        <div className="delete_btn" onClick={handleDelete}>
          <i className="bi bi-trash-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default Card;
