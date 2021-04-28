const Resources = ()=>{
    return (
        <>
            <div className="bg-warning text-dark my-5 mx-5 py-3 overflow-auto">
            <h1 className="text-center">We have provided some relevant links for Medical Resources : 
            </h1>

            <u><h2 className="font-weight-bold my-3 mx-4">All Covid Resources :</h2></u>
            <ul className="font-weight-bold h4 my-3">
                <li className="my-3">Covid 19 Twitter: <a href="https://covid19-twitter.in/">Click Here</a></li>
                <li className="my-3">Covid Resources : <a href="https://external.sprinklr.com/insights/explorer/dashboard/601b9e214c7a6b689d76f493/tab/0?id=DASHBOARD_601b9e214c7a6b689d76f493&home=1">Click Here</a></li>
                <li className="my-3">Covid 19 Glide App : <a href="https://covidhelp.glideapp.io/">Click Here</a></li>
                <li className="my-3">Covid Win : <a href="https://covidwin.in/">Click Here</a></li>
            </ul>
           

            <u><h2 className="font-weight-bold my-3 mx-4">Plasma Donors:</h2></u>
            <ul className="font-weight-bold h4 my-3">
                <li className="my-3">Need Plasma: <a href="https://needplasma.in/">Click Here</a></li>
                <li className="my-3">Indian Plasma Helpline: <a href="https://indianhelpline.com/Plasma-Helpline/">Click Here</a></li>
                <li className="my-3">Plasma Line : <a href="https://plasmaline.in/">Click Here</a></li>
                <li className="my-3">Plasma Donor : <a href="https://plasmadonor.in/">Click Here</a></li>
            </ul>
         

        <a href="https://www.mohfw.gov.in/pdf/coronvavirushelplinenumber.pdf" style={{
            'color':'black'
        }}><h2 className="font-weight-bolder mx-4 my-3">Central Help Line Numbers for Corona Virus</h2></a>

            </div>
        </>
    )
}

export default Resources;