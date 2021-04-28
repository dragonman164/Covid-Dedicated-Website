import GreenTick from '../Assets/greentick.png';
import RedCross from '../Assets/redcross.jpg';


const largeIcon =  {
    width: '50px',
    height: '50px',
    marginRight:'8px'
  }

const Home = ()=>{
    return (
        <>
        <h1 className="text-center font-weight-bold">General Guidelines from Government of India</h1>

        <div className="bg-success text-light my-2 mx-5 font-weight-bold py-3">

        <img style={largeIcon} src={GreenTick} alt='..'/>
        <div style={{float:"left"}}><h1 className="mx-3"> Do's: </h1> </div>

        <ol className="my-3  mx-2 h3">
            <li>Wash your hands frequently regularly with Soap</li>
            <li>Cover Your Mouth & Nose while coughing or sneezing</li>
            <li>Consult A Doctor If Sick</li>
            <li>Stay at home</li>

        </ol>
        
        </div>

        <div className="bg-danger text-light my-2 mx-5 font-weight-bold">

<img style={largeIcon} src={RedCross} alt='..'/>
<div style={{float:"left"}}><h1 className="mx-3"> Dont's: </h1> </div>


<ol className="my-3  mx-2 h3">
            <li>Avoid Close Contact With Anyone</li>
            <li>Do Not Spit</li>
            <li>Avoid Using Public Transport</li>
            <li>Do Not Use Over The Counter Medicines</li>
            <li>Don't Panic </li>
            <li>Don’t Touch Your Face</li>
        </ol>
</div>
        </>
    )
}

export default Home;