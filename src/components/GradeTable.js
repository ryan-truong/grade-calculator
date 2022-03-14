import React from 'react'
import Form from 'react-bootstrap/Form'
import HowTo from './HowTo'
import Typewriter from 'typewriter-effect'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import Category from './Category'
import {v4 as uuidv4} from 'uuid'

export const GradeTable = () => {

  //Add categories
  const[categories, setCategories] = useState([{id: uuidv4(), ygrade: '', tgrade: '', weight: ''}]);

  function addCategory(){
    setCategories([...categories, {id: uuidv4(), ygrade: '', tgrade: '', weight: ''}])
  }

  function removeCategory(){
    categories.pop()
    setCategories([...categories])
  }

  const handleChange = (e) => {
    const targetID = e.target.getAttribute('dataID')
    categories.map(obj => {
      if(obj.id === targetID){
        if(e.target.name === 'ygrade'){
          obj.ygrade = e.target.value
        }
        else if(e.target.name === 'tgrade'){
          obj.tgrade = e.target.value
        }
        else{
          obj.weight = e.target.value
        }
      }
      console.log(obj)
      return obj
    })
    setCategories([...categories])
  }
  return (
    <>
    <div className = 'title'>
      <Typewriter onInit={(typewriter) => {
        typewriter.typeString('Grade Calculator')
        .start()
      }}
      />
      </div>
      <div className = 'howToButton'>
      <HowTo></HowTo>
      </div>
      <div className = 'container'>
        <div className = 'gradeTableFlex'>
          <Form>
            {categories.map((item) => ( 
              <Form.Group>
                <Form.Label column='true' className = 'col-md-3'>Category
                  <Form.Control name='ygrade' placeHolder='Your Points' onChange = {handleChange} dataID = {item.id}></Form.Control>
                </Form.Label>
                <Form.Label column='true' className = 'col-md-3'>
                  <Form.Control name='tgrade' placeHolder="Total Points" onChange = {handleChange} dataID = {item.id}></Form.Control>
                </Form.Label>
                <Form.Label className = 'col-md-1'/>
                <Form.Label column='true' className = 'col-md-3'>Weight
                  <Form.Control name='weight' placeHolder="% worth" onChange = {handleChange} dataID = {item.id}></Form.Control>
                </Form.Label>
              </Form.Group>))
            }
          </Form>
          <div className = 'submitButton'>
            <Button variant = 'primary' size = 'lg'>Calculate</Button>
          </div>
          <div className = 'addButton'>
            <Button variant = 'success' size = 'sm' onClick={addCategory}>+</Button>
            <Button variant = 'danger' size = 'sm' onClick={removeCategory}>-</Button>
          </div>
        </div>
      </div>
    </>
  )
}


export default GradeTable;