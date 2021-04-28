const Footer = ()=>{

    let year = new Date().getFullYear();
  
      return (
            
          <footer className="container-fluid bg-info my-0 py-3 text-light sticky-bottom">
          <h4 className="text-center">All Rights Reserved</h4>
          <p className="mb-0 text-center">&copy; {year}-{year+1} Covid Se Bacho</p>
        </footer>
      
      )
  }
  
  export default Footer;