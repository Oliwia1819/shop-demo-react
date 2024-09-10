import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Screen from "./Screen";
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const validatePassword = (password) => {
    return password.length >=4;
  }

export default function LogIn(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [pass, setPass] = useState(false);
    const [redLine, setRedLine] = useState(false);
    const [invalidPass, setInvalidPass] = useState(false);
    const navigate = useNavigate();

    const Icon = !pass ? VisibilityOffIcon:VisibilityIcon;

    return <Screen className="log_in">
        <h1>Login</h1>
        <h6>Select a username and password from the list <br />
            below, or click on the username to <br />
             automatically populate the username and <br />
             password.</h6>
             
            <label>
                <input className={redLine?"invalid":"valid"} 
                type="email" 
                placeholder="Username" 
                name="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}/>

                <div className="input_password">
                  <input className={invalidPass?"invalid":"valid"} 
                    type={pass?"text":"password"} 
                    placeholder="Password" 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}/>
                  
                  <Icon onClick={e => setPass(!pass)}/>
                </div>

            </label>
            <div className="button" onClick={e => {
                const valid = validateEmail(email);
                setRedLine(!valid);
                const validPassword = validatePassword(password);
                setInvalidPass(!validPassword);

                if(valid && validPassword)
                    navigate('/')
            }}>Login</div>
           
           <div className="example_log">
            <h2>Accepted usernames:</h2>
              <p>bob@example.com <br />
              alice@example.com (locked out)
              </p>
             <h2>Password for all users:</h2>
             <p>10203040</p>
           </div>

    </Screen>
}