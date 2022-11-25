import { Modal } from 'flowbite-react'
import React from 'react'
import LoginForm from './LoginForm'
import SocialMediaLogin from './SocialMediaLogin';
import { useState } from 'react';
import RegisterForm from './RegisterForm';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export default function RegisterationModal({ show, setShow }) {
    const { setErrors } = useContext(AuthContext)
    const [Form, setForm] = useState(true)
    return (
        <>
            <Modal
                className='backdrop-blur-sm dark:bg-gray-600'
                show={show}
                onClose={() => setShow(!show)}
            >
                <Modal.Header className='dark:bg-duaa'>
                    {Form ? "Login" : "Sign Up"}
                </Modal.Header>
                <Modal.Body className='dark:bg-duaa'>
                    {
                        Form ?
                            <>
                                <LoginForm >
                                    <SocialMediaLogin />
                                </LoginForm>

                            </>
                            :
                            <>

                                <RegisterForm >
                                    <SocialMediaLogin />
                                </RegisterForm>
                            </>
                    }
                </Modal.Body>
                <Modal.Footer className='dark:bg-duaa'>
                    <div className='dark:bg-duaa  w-full text-center flex justify-center  bg-white'>
                        <p className='text-center'> {!Form ? "Already have an account ?" : "Don't have an account ?"}  <button onClick={() => { setForm(!Form); setErrors({ name: "", email: "", password: [""] }) }} className='text-navy dark:text-white' >{!Form ? "Login" : "Sign up"}</button> </p>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
