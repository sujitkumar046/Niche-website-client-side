import React from 'react';
import { useEffect, useState } from 'react';
import useAuth from '../../Hook/UseAuth';
import Footer from '../../Shared/Footer/Footer';
import NavBar from '../../Shared/NavBar/NavBar';

const Myorders = () => {

    const {user} = useAuth();
    const [myorders, Setmyorders] = useState([])

    useEffect(() => {
        fetch('https://safe-sierra-06219.herokuapp.com/orders')
        .then(res=> res.json())
        .then (data => {
            const myPlacedOrder = data.filter (order => order.email === user.email )
            Setmyorders (myPlacedOrder)
        })

    }, [])


    const handleDelete = (id) => {

        const proceedtoDelete = window.confirm('Want to delete')
        if (proceedtoDelete) {
            fetch(`https://safe-sierra-06219.herokuapp.com/orders/${id}`, {
            method: 'DELETE'
        })
        .then (res=> res.json())
        .then (data => {
            if (data.deletedCount > 0) {
                alert('Deleted Successfully')
                const remainingOrders = myorders.filter (deleteOrder => deleteOrder._id !==id)
                Setmyorders(remainingOrders)
            }
        })


        }
    }

    const hadleStatus = (id) => {
        
    }





    

    return (
        <>
       
            <div className='row container-fluid'>
    
            {myorders.map (mysingleorder => 
                <div className='col-md-3 col-lg-3 col-sm-6 bg-white border my-5'>
                    <h4>Hello <span className='text-success'>{mysingleorder?.name} </span>  </h4>
                    <h5>Your Order: <span className='text-primary'>{mysingleorder?.product}</span> </h5>
                    {<button onClick= {() => {handleDelete(mysingleorder?._id)}} className='btn btn-danger'>Delete</button> }
                

                    <button onClick={hadleStatus} className='btn btn-danger ms-2'>Pending Order</button>


                </div>)
            }
        </div>

       

            
        </>
    );
};

export default Myorders;