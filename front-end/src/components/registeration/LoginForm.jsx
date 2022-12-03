import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export default function LoginForm({ children }) {
    const { errors, loginFun, emailInput, passwordInput } = useContext(AuthContext)
    return (
        <>
            <div className='dark:bg-duaa/80  bg-white'>
                <div className="grid grid-cols-6 gap-4 ">

                    <div className="col-span-6">
                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                            Email<small className='text-red-600 '>{errors?.email}{errors?.user}</small>

                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 text-black  p-2.5 text-sm shadow-sm"
                            type="text"
                            placeholder='email@gmail.com'
                            name='email'
                            ref={emailInput}
                        />
                    </div>
                    <div className="col-span-6">
                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                            Password<small className='text-red-600 '>{errors?.password}</small>
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 text-black  p-2.5 text-sm shadow-sm"
                            type="password"
                            placeholder='********'
                            name='password'
                            ref={passwordInput}
                        />
                    </div>

                    <div className="col-span-6 mx-auto">
                        <button
                            onClick={loginFun}
                            className=" rounded-md bg-navy w-full px-[137px]  py-3 text-center text-[12px] sm:text-sm font-bold uppercase text-white dark:bg-candy dark:hover:bg-navy transition hover:bg-candy"
                        >
                            Login
                        </button>
                    </div>
                    <div className="flex col-span-6 my-2 text-sm font-semibold items-center text-black dark:text-white">
                        <div className="flex-grow border-t  h-px mr-3"></div>
                        OR
                        <div className="flex-grow border-t h-px ml-3"></div>
                    </div>
                    {children}
                </div>
            </div>

        </>
    )
}
