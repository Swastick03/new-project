import React from 'react';
function Poste(){
    return(
    <div style={{width:"100%",maxHeight:"25em"}}>
    <img style={{width:"100%",maxHeight:"25em",objectFit:'cover'}} src="https://images.unsplash.com/photo-1515704089429-fd06e6668458?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fGNvbXB1dGVyfGVufDB8MHwwfHx8MA%3D%3D" className="img-fluid poster_image" alt="Responsive_image"/>
    <div className='text1-overlay'> Computer Engineering</div>
    <div className='text2-overlay'> 142,765 Computer Engineers follow this</div>
    </div>);
}
export default Poste;