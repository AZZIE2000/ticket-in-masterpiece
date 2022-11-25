<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rules\Password;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        // $request->validated($request->all());
        $validator = Validator::make($request->all(), [

            'email' => ['required', 'string', 'max:255'],
            'password' => ['required', 'min:8']
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 401, 'errors' => $validator->messages()]);
        }
        if (!Auth::attempt($request->only(['email', 'password']))) {
            // return $this->error('', 'user do not exist!', 401);
            return response()->json(['status' => 402, 'errors' => 'user do not exist!']);
        }
        $user = User::where('email', $request->email)->first();
        return $this->success([
            'user' => $user,
            'token' => $user->createToken('API Token Of ' . $user->name)->plainTextToken
        ]);
    }

    public function register(Request $request)
    {
        // $val =    $request->validated($request->all());
        $validator = Validator::make($request->all(), [
            'name' => ['required', 'string', 'min:4', 'max:255'],
            'email' => ['required', 'string', 'max:255', 'unique:users', "email"],
            'password' => ['required', 'confirmed', Password::defaults(), 'min:8']
        ]);
        if ($validator->fails()) {
            return response()->json(['status' => 401, 'errors' => $validator->messages()]);
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),

        ]);
        return response()->json([
            'status' => 200,
            'user' => $user,
            'token' => $user->createToken('API Token Of ' . $user->name)->plainTextToken
        ]);
    }
    public function logout()
    {
        Auth::user()->currentAccessToken()->delete();
        return response()->json([
            'status' => 200,
            'message' => "see ya bish"
        ]);
    }
    public function user()
    {
        return $this->success([
            'user' => Auth::user(),
            'message' => "hi" . Auth::user()->name,
        ]);
    }
    public function googleLogin(Request $request)
    {
        $finduser = User::where('google_id', $request->google_id)->first();

        if ($finduser) {
            return response()->json([
                'user' => $finduser,
                'token' => $finduser->createToken('API token of ' . $finduser->name)->plainTextToken
            ]);
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'google_id' => $request->google_id
            ]);
            return response()->json([
                'user' => $user,
                'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken
            ]);
        }
    }
    public function facebookLogin(Request $request)
    {
        $finduser = User::where('facebook_id', $request->facebook_id)->first();

        if ($finduser) {
            return response()->json([
                'user' => $finduser,
                'token' => $finduser->createToken('API token of ' . $finduser->name)->plainTextToken
            ]);
        } else {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'facebook_id' => $request->facebook_id
            ]);
            return response()->json([
                'user' => $user,
                'token' => $user->createToken('API Token of ' . $user->name)->plainTextToken
            ]);
        }
    }
}
