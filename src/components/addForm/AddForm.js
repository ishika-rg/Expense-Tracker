import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddForm.css'
// import {Categories} from '../../category/CategoryList';

import {useState} from 'react'
import { categories } from '../../category/CategoryList';


const AddForm = () => {


    const cat = categories

    const [title, setTitle] = useState('')
    const [amount, setAmount] = useState('')
    const [category, setCategory] = useState()

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleAmount = (e) => {
       const val = parseFloat(e.target.value)
       setAmount(val)
    }
    
  return (

    <div>
        
    <Form className = 'add_form  w-50 m-auto mt-5 p-3 rounded-2'>
      <Form.Group className="mb-3" controlId="expense">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" 
        placeholder="Enter expense"
        onChange = {(e) => handleTitle(e)}
        value = {title}
         />
        {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
      </Form.Group>

      

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Amount ₹</Form.Label>
        <Form.Control type="number" 
        placeholder="Enter Amount"
        value = {amount}
        onChange = {(e) => handleAmount(e)} />
      </Form.Group>

     

      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select  style = {{borderRight : `10px solid pink`}} >
            { categories.map(item => {
                return (
                    <option key = { item.id } 
                    value = {item.title}
                   
                    > {item.title} </option>
                )
            })}
    
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default AddForm

    //   <option>Disabled select</option>