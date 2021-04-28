import {useEffect,useState} from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap';

const Tracker = ()=>{

    const [isLoading, setLoading] = useState(true);
    const [data,setData] = useState();

    useEffect(()=>{

        async function getData() {
                let response = await axios.get(
                    'https://api.rootnet.in/covid19-in/stats/latest',
                )
                setData(response.data)
                setLoading(false)
        
              
        }
        getData()
        
        
     

    },[])
 
  
    return (
       
        <div className="container bg-info text-light py-3 my-5">
        <h1 className="font-weight-bold text-center"> Covid 19 Stats (India)</h1>
        { 
            !isLoading?(
            <>
            <h3 >Total Confirmed Cases : {data.data.summary.total}</h3>
        <h3>Total Deaths : {data.data.summary.deaths}</h3>
        <h3>Total Discharged : {data.data.summary.discharged}</h3>
        <h1 className="text-center font-weight-bold">Covid 19 Stats state wise</h1>
       
       <Table responsive striped bordered hover variant="dark">
 <thead>
   <tr>
     <th>S No.</th>
     <th>State/ UT</th>
     <th>Total Confirmed Cases</th>
     <th>Discharged</th>
     <th>Deaths</th>
   </tr>
 </thead>
 <tbody>
 {
     data.data.regional.map((elem,index)=>{
         return (
           <tr>
       <td>{index+1}</td>
       <th>{elem.loc}</th>
       <th>{elem.confirmedCasesIndian + elem.confirmedCasesForeign}</th>
       <th>{elem.discharged}</th>
       <th> {elem.deaths}</th>
   </tr>
         )
     })
 }
   
 
 </tbody>
</Table>
        </>
        
):null

        }
        
       
       
        </div>
       
    )
}

export default Tracker;