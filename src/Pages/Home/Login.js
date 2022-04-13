import React from 'react';
import Lottie from 'lottie-react';
import Login from '../../Assets/login.json'

function login() {
    return(
        <>
           
            <main className="form-signin">
                    <form>
                        <Lottie
                            className='login-animation'
                            animationData={Login}
                            loop={true}
                        />
                        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                        <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                        </div>
                        <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                        </div>

                        <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me"/> Remember me
                        </label>
                        </div>
                        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                        <p className="mt-5 mb-3 text-muted">© 2017-2021</p>
                    </form>
</main>
        </>
    )
    
}
export default login