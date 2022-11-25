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
                show={show}
                onClose={() => setShow(!show)}
            >
                <Modal.Header>
                    Terms of Service
                </Modal.Header>
                <Modal.Body>
                    {
                        Form ?
                            <>
                                <RegisterForm >
                                    <SocialMediaLogin />
                                </RegisterForm>

                            </>
                            :
                            <>

                                <LoginForm >
                                    <SocialMediaLogin />
                                </LoginForm>
                            </>
                    }
                </Modal.Body>
                <Modal.Footer>
                    <div className='dark:bg-duaa/80  w-full text-center flex justify-center  bg-white'>
                        <p className='text-center'> {Form ? "Already have an account ?" : "Don't have an account ?"}  <button onClick={() => { setForm(!Form); setErrors({ name: "", email: "", password: [""] }) }} className='text-navy dark:text-white' >{Form ? "Login" : "Sign up"}</button> </p>
                    </div>
                </Modal.Footer>
            </Modal>
        </>
    )
}
