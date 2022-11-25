import React from 'react'
import { useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { FaFacebook } from 'react-icons/fa';
import LoginForm from '../components/LoginForm';
export default function Login() {
    const { handleInput, googleLoginFun, FacebookLoginFun, emailInput, passwordInput, loginFun, errors, login } = useContext(AuthContext)
    return (
        <></>
        // <div>
        //     <section class="bg-white dark:bg-gray-900">

        //         <div className="grid grid-cols-8 gap-y-10 gap-4">
        //             <div className=" col-span-2  "></div>


        //             <div className=" col-span-4 flex flex-col gap-2 w-3/4 place-self-center ">

        //                 <div className="col-span-6 ">
        //                     <label className="mb-1 flex gap-x-1  text-sm text-black dark:text-white" >
        //                         Email
        //                         <LoginForm error={errors.email} />
        //                         {/* <small className='text-red-600 '>{errors?.email}</small> */}
        //                     </label>
        //                     <input
        //                         className="w-full rounded-lg border-gray-200 text-black  p-2.5 text-sm shadow-sm"
        //                         type="email"
        //                         placeholder='email@gmail.com'
        //                         name='email'
        //                         ref={emailInput}
        //                     // value={login.email}
        //                     />
        //                 </div>
        //                 <div className="col-span-6">
        //                     <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
        //                         Password
        //                         <LoginForm error={errors.password} />
        //                         {/* <small className='text-red-600 '>{errors?.password}</small> */}
        //                     </label>
        //                     <input
        //                         className="w-full rounded-lg border-gray-200 text-black  p-2.5 text-sm shadow-sm"
        //                         type="email"
        //                         placeholder='********'
        //                         name='password'

        //                         ref={passwordInput} />
        //                 </div>

        //                 <div className="col-span-6 mx-auto">
        //                     <button
        //                         onClick={loginFun}
        //                         class=" rounded-md bg-navy w-full px-[137px]  py-3 text-center text-[12px] sm:text-sm font-bold uppercase text-white dark:bg-candy dark:hover:bg-navy transition hover:bg-candy"
        //                     >
        //                         Login
        //                     </button>
        //                 </div>
        //                 <div class="flex col-span-6 my-2 text-sm font-semibold items-center text-black dark:text-white">
        //                     <div class="flex-grow border-t  h-px mr-3"></div>
        //                     OR
        //                     <div class="flex-grow border-t h-px ml-3"></div>
        //                 </div>
        //                 <div className='col-span-6 md:gap-0 gap-3 flex-col md:flex-row flex items-center justify-around  '>

        //                     <GoogleLogin



        //                         onSuccess={googleLoginFun}
        //                         onError={() => {
        //                             console.log('Login Failed');
        //                         }}
        //                     />

        //                     <FacebookLogin
        //                         className='bg-[#4267b2] p-2 rounded flex  text-white   items-center  gap-x-1'

        //                         appId="448147154061589"
        //                         onSuccess={(response) => {
        //                             // console.log('Login Success!', response);
        //                         }}
        //                         onFail={(error) => {
        //                             console.log('Login Failed!', error);
        //                         }}
        //                         onProfileSuccess={FacebookLoginFun}
        //                     >Login with Facebook <FaFacebook className='w-5 h-5' /></FacebookLogin>
        //                 </div>
        //             </div>
        //             <div className=" col-span-2  "></div>
        //         </div>

        //     </section >
        // </div >
    )
}
