import React, { useState } from 'react';

const Makeadmin = () => {

    const [email, Setemail] = useState('')
    const [success, Setsucces] = useState(false)

    const handleOnBlur = (e) => {
        Setemail(e.target.value)
        
    }

    const handlesubmit = (e) => {
        e.preventDefault(e)
        const user ={email}
        fetch ('https://safe-sierra-06219.herokuapp.com/users', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                
              },
            body: JSON.stringify(user)
    
        })
        .then (res=> res.json())
        .then (data => {
            if(data.modifiedCount) {
                console.log (data)
                Setsucces(true);
               
                
            }
            

        })


    }
    return (
        <>
        {/* <NavBar></NavBar> */}
         <div className='mx-auto container-fluid my-5'>
         <h2>Make Admin</h2>
            <form onSubmit={handlesubmit}>

            <input className='w-25' onBlur={handleOnBlur} type="email" name="email"  placeholder='Enter Email' /> <br /> <br/>

            <button  className='btn btn-dark' type='submit'>Make Admin</button>

            







            </form>

            {
                    success &&  
                   <p>Successfully admin created</p>

                    } 

         </div>

        
            
        </>
    );
};

export default Makeadmin;