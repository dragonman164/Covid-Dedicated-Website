import {Modal,Button,Card} from 'react-bootstrap';

const CardDetailsSuccess =
    (
        <Card
    className="mb-2
    bg-success text-light"
  >
    <Card.Header>You are Safe!!</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Stay at Home !! 
        Perform Deep Breathing Exercises and Yoga
      </Card.Text>
    </Card.Body>
  </Card>
    )


const CardDetailsWarning = 
    (
        <Card
    className="mb-2
    bg-warning text-light"
  >
    <Card.Header>You are Unsafe</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Perform Deep Breathing Exercises and Yoga
        You may need to visit hospital
      </Card.Text>
    </Card.Body>
  </Card>
    )



const CardDetailsDanger =
      <Card
    className="mb-2
    bg-danger text-light"
  >
    <Card.Header>Hospitalize yourself immediately</Card.Header>
    <Card.Body>
      <Card.Title></Card.Title>
      <Card.Text>
        Visit a Hospital Immediatley
      </Card.Text>
    </Card.Body>
  </Card>
    


const ResultModal = (props)=>{

    let temp ; 
    if(props.score <= 40)
 {   temp = CardDetailsSuccess
    console.log("here");
}
    else if(props.score >= 40 && props.score <=60)
    temp = CardDetailsWarning
    else
    temp = CardDetailsDanger


    return (
        <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Results</Modal.Title>
        </Modal.Header>
        <Modal.Body className="h4">Chances of hospitalization: {props.score} %
    {temp}
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
}


export default ResultModal;