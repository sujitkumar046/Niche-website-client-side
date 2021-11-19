import React, { useEffect, useState } from 'react';

const Manageallorders = () => {


const [allorder, Setallorder] = useState([])
const [order, Setorder] = useState({})




useEffect(() => {
    fetch('https://safe-sierra-06219.herokuapp.com/orders')
    .then(res => res.json())
    .then (data => Setallorder(data))
}, [])


const handleOrders = (id) => {

    const proceed = window.confirm ('Are you sure to delete')
    if (proceed) {
        fetch(`https://safe-sierra-06219.herokuapp.com/orders/${id}`, 
    {
        method: 'DELETE'
    })
    .then (res =>res.json())
    .then (data => {
        if (data.deletedCount > 0) {
            alert('order cancelled SuccessfullY')
            const restOrders = allorder.filter (all => all._id !== id)
            Setallorder(restOrders)
        }
    })

    }

    
}

const handleStatus = (id) => {
    
fetch (`https://safe-sierra-06219.herokuapp.com/orders/${id}`, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
        
      },
    body: JSON.stringify()

})
.then (res=> res.json())
.then (data => {
    if(data.modifiedCount) {
            
        
            fetch(`https://safe-sierra-06219.herokuapp.com/orders/${id}`)
            .then (res=> res.json())
            .then (data => {
                console.log(data)
                Setorder(data)
                


            } ) 
           
       
       
        
    }
    

})


    
}








    return (
        <>
        {/* <NavBar></NavBar> */}

        

        <div className='row container-fluid my-5'>
        <h2>Here are all the orders</h2>

            
        {
            allorder.map(singleorder => 
            <div className='col-md-3 col-lg-3 col-sm-6 border mt-3'>
                <h4>Hello <span className='text-success'>{singleorder?.name} </span>  </h4>
                    <h5>Your Order: <span className='text-primary'>{singleorder?.product}</span> </h5>
                    
                    

                    <button onClick={() => {handleOrders(singleorder._id)}} className='btn btn-danger m-2'>Delete</button>

                    
                    
                    
                    <button onClick={() => {handleStatus(singleorder._id)}} className='btn btn-success'>Approve</button> 

                  
                    {
                        order?.status === "approved" ?

                        <p>Order Status: <span className='text-primary'>{order?.status}</span> </p>  
                        :
                        <p>Order Status: <span className='text-primary'>{singleorder?.status}</span> </p>  


                    }
                     

                    
                     

                   
                        
                        
                        
                
                        

         
                    

                



            </div>)
        }


        </div>

        {/* <Footer></Footer> */}

            
        </>
    );
};

export default Manageallorders;