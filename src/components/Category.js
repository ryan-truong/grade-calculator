import {useState} from 'react'
import Form from 'react-bootstrap/Form'


export const Category = () => {

  return (
    <Form.Group>
            <Form.Label column='true' className = 'col-md-3'>Category
              <Form.Control name='ygrade' placeHolder="Your Points"></Form.Control>
            </Form.Label>
            <Form.Label column='true' className = 'col-md-3'>
              <Form.Control name='tgrade' placeHolder="Total Points"></Form.Control>
            </Form.Label>
            <Form.Label className = 'col-md-1'/>
            <Form.Label column='true' className = 'col-md-3'>Weight
              <Form.Control name='weight' placeHolder="% worth"></Form.Control>
            </Form.Label>
    </Form.Group>
  )
}
export default Category
