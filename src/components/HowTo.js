import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import {useState} from 'react'
import ListGroup from 'react-bootstrap/ListGroup'

export const HowTo = () => { 

    const[show,setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  return (
    <>
    <Button variant = "primary" size = "sm" onClick={handleShow}>?</Button> 
    <Modal show = {show} onHide = {handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>How To Use Grade Calculator</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <ListGroup as="ol">
                <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start"> Categories - represent all the different components that make up your grade
                (e.g. quizzes, tests, midterms, final)</ListGroup.Item>
                <ListGroup.Item as="li">Points - represent how many points you have earned in the respective category</ListGroup.Item>
                <ListGroup.Item as="li">Weight - represents how much percentage of your overall grade the category is worth</ListGroup.Item>
            </ListGroup>
        </Modal.Body>
        <Modal.Footer>
            <Button variant = "primary" onClick = {handleClose}>Close</Button>
        </Modal.Footer>
    </Modal>
    </>
  )
}


export default HowTo