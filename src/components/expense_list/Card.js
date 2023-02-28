import React from 'react'
import './Card.css'
import Moment from 'react-moment';

const Card = ({item}) => {

  console.log("from card")
  console.log(item)

  // const time = Moment(item.createdAt).fromNow()

  return (
    <div className = 'card'
      style = {{borderRight : `5px solid ${item.category.color}`}}
    >

      <div className = 'card_img'>
        <img src = {item.category.icon} alt = {item.category.title} />
      </div>

      <div className = 'card_info'>


        <p>{item.title}</p>

        <Moment fromNow >  {item.createdAt} </Moment>



      </div>

    </div>
  )
}

export default Card