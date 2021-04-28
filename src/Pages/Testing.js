import {Form,Button} from 'react-bootstrap';
import ResultModal from '../Components/ResultModal';
import {useState} from 'react';
let oxygen = 0;
let bodytemp = 0;
let fever = true;
let vomit = true;
let taste = true;
let score = 15;

const Testing = ()=>{
    const [show, setShow] = useState(false);    
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <>

        <ResultModal score={score} show={show} handleClose={handleClose} />
        <div className="cotainer bg-info text-light mx-5 my-5 py-5">
        <h1 className="text-center my-3 font-weight-bold"> We need Following Details from you : -</h1>
        <h4 className="mx-2">Please note that this app may not give accurate results!! You are advised to consult a doctor</h4>
        <Form className="my-2 px-5">
  <Form.Group controlId="oxygen">
    <Form.Label>Oxygen Level(In Percentage)</Form.Label>
    <Form.Control onChange={(e)=>{oxygen=e.target.value}} type="number" placeholder="If you dont know, put 0 here" />
  </Form.Group>
  
  <Form.Group controlId="temp">
    <Form.Label>Body Temperature</Form.Label>
    <Form.Control onChange={(e)=>{bodytemp=e.target.value}} type="number" placeholder="(In Farenheit)" />
  </Form.Group>

  <Form.Group controlId="fever">
    <Form.Label>Fever </Form.Label>
    <Form.Control onChange={(e)=>{fever=e.target.value}} as="select">
      <option>Yes</option>
      <option>No</option>
    </Form.Control>
  </Form.Group>

<Form.Group controlId="vomiting">
    <Form.Label>Did you Vomit?</Form.Label>
    <Form.Control onChange={(e)=>{vomit=e.target.value}} as="select">
      <option>Yes</option>
      <option>No</option>
    </Form.Control>
  </Form.Group>


  <Form.Group controlId="taste">
    <Form.Label>Loss of Taste</Form.Label>
    <Form.Control onChange={(e)=>{taste=e.target.value}} as="select">
      <option>Yes</option>
      <option>No</option>
    </Form.Control>
  </Form.Group>
  
</Form>


<Button variant="danger" className="btn-lg mx-3" onClick={()=>{
score = 0
if(oxygen< 94 && oxygen >90)
score += 1;
else if(oxygen <=90 && oxygen >= 80)
score +=2
else if(oxygen < 80)
score += 3

if(bodytemp >=100)
score +=1;

if(vomit)
score +=1;

if(taste)
score += 1;

if(fever)
score +=1

score = (score/10)*100
handleShow()


}}>Submit</Button>
        </div>
        </>
    )
}

export default Testing;