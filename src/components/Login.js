import React , {useState} from 'react';

function Login(props) {
    const [nameOfComponent, setNameOfComponent] = useState('Login');
    return (
        <div>
            {
                nameOfComponent
            }
            
        </div>
    );
}

export default Login;
