import React from 'react'
import Form from 'react-bootstrap/Form'
import HowTo from './HowTo'
import Typewriter from 'typewriter-effect'
import {useState} from 'react'
import Button from 'react-bootstrap/Button'
import {v4 as uuidv4} from 'uuid'
import Modal from 'react-bootstrap/Modal'

export const GradeTable = () => {

  //Add categories
  const[categories, setCategories] = useState([{id: uuidv4(), ygrade: '', tgrade: '', weight: ''}]);

  const[finalGrade, showFinalGrade] = useState(false);
  const[calculatedGrade, helpCalculateGrade] = useState(0);
  const[weight, helpCalculateWeight] = useState(0);

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

  localStorage.setItem('grade', '0');
  localStorage.setItem('weight', '0')

  const calculateGrade = () => {
    showFinalGrade(true);
    categories.map((category) => {
      const gradeForCategory = parseFloat(category.ygrade)/parseFloat(category.tgrade) * parseFloat(category.weight);
      const currentGrade = localStorage.getItem('grade');
      const updatedGrade = parseFloat(currentGrade) + parseFloat(gradeForCategory);
      localStorage.setItem('grade', updatedGrade);
      helpCalculateGrade(localStorage.getItem('grade'));

      const weightForCategory = category.weight;
      const currentWeight = localStorage.getItem('weight');
      const updatedWeight = parseFloat(currentWeight) + parseFloat(weightForCategory);
      localStorage.setItem('weight', updatedWeight);
      helpCalculateWeight(localStorage.getItem('weight'));

      return updatedGrade;
    })

    if(weight !== 100){
      alert('WARNING: Your categories do not add up to 100%');
    }
  }


  const closeGrade = () => {
    showFinalGrade(false);
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
            <Button variant = 'primary' size = 'lg' onClick={calculateGrade}>Calculate</Button>
          </div>
          <div className = 'addButton'>
            <Button variant = 'success' size = 'sm' onClick={addCategory}>+</Button>
            <Button variant = 'danger' size = 'sm' onClick={removeCategory}>-</Button>
          </div>
        </div>
      </div>
      <Modal show={finalGrade} onHide = {closeGrade} centered>
            <Modal.Body>
              Your Final Grade Is: {calculatedGrade}%
            </Modal.Body>
      </Modal>
    </>
  )
}


export default GradeTable;