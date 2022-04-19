import React from 'react';
import Lottie from 'lottie-react';
import LoginLottie from '../../Assets/login.json'
import {useState} from 'react'
import Spline from "@splinetool/react-spline";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   async function loginHotel() {
        console.log({email,password});
        let response= await  fetch("https://i-card-generator.herokuapp.com/",{
            method:'POST',
            headers:{
                'content-type':'application/json',
                'Accept':'application/json'
            },
           body: JSON.stringify({email,password})
        }).catch((error)=>{});
            return response?.data;
    }

    return(
        <>
           
            <main className="form-signin">
                    <form>
                     {/* <Spline scene="https://draft.spline.design/OxNjFhQTkxCeujDZ/scene.spline" /> */}
                        <Lottie
                            className='login-animation'
                            animationData={LoginLottie}
                            loop={true}
                        />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com"  onChange={(event)=>{setEmail(event.email.value)}} />
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" value={password} onChange={(event)=>{setPassword(event.target.value)}} />
                        <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit" onClick={()=>loginHotel()} >Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
                    </form>
</main>
        </>
    )
    
}
export default Login