import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const AdminRoute = ({children, ...rest}) => {

    const {user, admin, isloading} = useAuth();

    if(isloading) {
       return <div class="spinner-border" role="status">
       <span class="visually-hidden">Loading...</span>
     </div>
    }

    return (
        <Route
        
        {...rest}
        render = {({ location }) => 

        user.email && admin ? 
        ( children ) : ( <Redirect

            to={{
            pathname: "/",
            state: { from: location }
        }}
                
        />
        )
        }

        />
    );
};

export default AdminRoute;