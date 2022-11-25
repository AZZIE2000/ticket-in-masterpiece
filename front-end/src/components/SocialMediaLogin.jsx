import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from '@greatsumini/react-facebook-login';
import { FaFacebook } from 'react-icons/fa';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
export default function SocialMediaLogin() {
    const { googleLoginFun, FacebookLoginFun } = useContext(AuthContext)

    return (
        <div className='col-span-6 md:gap-0 gap-3 flex-col md:flex-row flex items-center justify-around  '>

            <GoogleLogin



                onSuccess={googleLoginFun}
                onError={() => {
                    console.log('Login Failed');
                }}
            />

            <FacebookLogin
                className='bg-[#4267b2] p-2 rounded flex  text-white   items-center  gap-x-1'

                appId="448147154061589"
                onSuccess={(response) => {
                    // console.log('Login Success!', response);
                }}
                onFail={(error) => {
                    console.log('Login Failed!', error);
                }}
                onProfileSuccess={FacebookLoginFun}
            >Login with Facebook <FaFacebook className='w-5 h-5' /></FacebookLogin>
        </div>
    )
}
