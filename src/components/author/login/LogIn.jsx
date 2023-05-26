import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGithub, FaGoogle, FaPhabricator } from "react-icons/fa";
import { AuthContext } from '../../providers/AuthProvider';

const LogIn = () => {
    // const {signIn} = useContext(AuthContext)
    const [showPassword, setShowPassword] = useState(false)
    const { signIn , googleSignIn, gitSignIn } = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handelTogglePassword = () => {
        setShowPassword(!showPassword)
    }
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                // console.log(loggedUser);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handelGoogleSignIn = () => {
        googleSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
        })
        .catch(error => console.log(error))
    }

    const handelGitSignIn =() => {
        gitSignIn()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, { replace: true })
        })
        .catch()
    }

    return (
        // <div className='container mx-auto'>

            <div className="container mx-auto max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                <form onSubmit={handleLogin} className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" className="input-field" placeholder="name@company.com" required />
                    </div>
                    <div >
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <div className='input-field flex items-center'>
                <input  className='flex-grow ps-2'  type={showPassword?'text' : 'password'}name="password"  placeholder="••••••••" required />
                
                <span onClick={handelTogglePassword}><FaPhabricator className='ms-1'></FaPhabricator></span>
                </div>
            </div>
                    <div className="flex items-start">
                        <div className="flex items-start">
                            <div className="flex items-center h-5">
                                <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                            </div>
                            <label className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                        </div>
                        <Link href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
                    </div>
                    <button type="submit" className="from-button">Login to your account</button>
                    <button onClick={handelGoogleSignIn} type="submit" className="from-button flex justify-center items-center"><FaGoogle className='me-1'></FaGoogle><span>Google Sign-in</span></button>
                    <button onClick={handelGitSignIn} type="submit" className="flex justify-center items-center from-button"> <FaGithub className='me-1'></FaGithub>  <span>GitHub SIgn-in</span></button>
                    <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                        Not registered? <Link to='/register' className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                    </div>
                </form>
            </div>

        // </div>
    );
};

export default LogIn;