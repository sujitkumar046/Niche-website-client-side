import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../Hook/UseAuth';

const PrivateRoute = ({children, ...rest}) => {

    const {user, isloading} = useAuth();

    if(isloading) {
       return <div class="spinner-border" role="status">
       <span class="visually-hidden">Loading...</span>
     </div>
    }

    return (
        <Route
        
        {...rest}
        render = {({ location }) => 

        user.email ? 
        ( children ) : ( <Redirect

            to={{
            pathname: "/login",
            state: { from: location }
        }}
                
        />
        )
        }

        />
    );
};

export default PrivateRoute;