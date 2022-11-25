import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export default function RegisterForm({ children }) {
    const { errors, fNameInputR, LNameInputR, emailInputR, passwordInputR, rPasswordInputR, registerFun } = useContext(AuthContext)
    return (
        <>
            <div className='dark:bg-duaa/80 bg-white'>
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-span-3">
                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                            First Name<small className='text-red-600 '>{errors?.name}</small>
                        </label>
                        <input
                            className="w-full rounded-lg  border-gray-200 text-black  p-2.5 text-sm shadow-sm"
                            type="text"
                            ref={fNameInputR}
                        />
                    </div>
                    <div className="col-span-3">
                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                            Last Name<small className='text-red-600 '></small>
                        </label>

                        <input
                            className="w-full rounded-lg border-gray-200 text-black  p-2.5 text-sm shadow-sm"
                            type="text"
                            ref={LNameInputR}
                        />
                    </div>
                    <div className="col-span-6">
                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                            Email<small className='text-red-600 '>{errors?.email}</small>
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 text-black  p-2.5 text-sm shadow-sm"
                            type="email"
                            placeholder='email@gmail.com'
                            ref={emailInputR}
                        />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                            Password<small className='text-red-600 '>{errors?.password.map(i => {
                                if (i.includes("characters")) {
                                    return i;
                                }
                            })}</small>
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 text-black  p-2.5 text-sm shadow-sm"
                            type="email"
                            placeholder='********'
                            ref={passwordInputR}
                        />
                    </div>
                    <div className="col-span-6 md:col-span-3">
                        <label className="mb-1 flex gap-x-1 text-sm text-black dark:text-white" >
                            Repeat Password<small className='text-red-600  '>{errors?.password.map(i => {
                                if (i.includes("match")) {
                                    return i;
                                }
                            })}</small>
                        </label>
                        <input
                            className="w-full rounded-lg border-gray-200 text-black  p-2.5 text-sm shadow-sm"
                            type="email"
                            placeholder='********'
                            ref={rPasswordInputR}
                        />
                    </div>
                    <div className="col-span-6 mx-auto">
                        <button
                            class=" rounded-md bg-navy w-full px-[137px]  py-3 text-center text-[12px] sm:text-sm font-bold uppercase text-white dark:bg-candy dark:hover:bg-navy transition hover:bg-candy"
                            onClick={registerFun}
                        >
                            Register
                        </button>
                    </div>
                    <div class="flex col-span-6 my-2 text-sm font-semibold items-center text-black dark:text-white">
                        <div class="flex-grow border-t h-px mr-3"></div>
                        OR
                        <div class="flex-grow border-t h-px ml-3"></div>
                    </div>
                    {children}
                </div>

            </div>

        </>
    )
}
