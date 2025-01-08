import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/loginSignupService";

const LoginSignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSignup = () => {
        navigate("/signup");
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const items = { email, password };
        try {
            await loginUser(items).then((res)=>{
                if (res.error) {
                    // Display the error to the user (you can replace with a UI toast or alert)
                    alert(`Login failed: ${res.error}`);
                } else {
                    console.log("Login successful:", res);
                    localStorage.setItem('userToken', `Bearer ${res.data.token}`);
                    navigate('/');
                }
            });            
        } catch (err) {
            console.error("Unexpected error during login:", err);
            alert("An unexpected error occurred. Please try again later.");
        }
    };
    
    return (
        <div className="h-screen w-screen bg-gradient-to-br from-white via-blue-300 via-blue-700 to-black flex items-center justify-center">
            <div className="pr-20 h-2/3 w-1/3 bg-white rounded-lg shadow-lg relative md:flex hidden">
                <img src="/logo3.png" alt="Logo" className="w-full pt-20 justify-center items-center absolute" />
            </div>
            <div className="h-2/3 w-1/3 pl-20 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-8">
                <p className="text-blue-900 text-5xl font-bold font-poppins">Login</p>

                <div className="relative w-10/12">
                    <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        placeholder="Email"
                        className="w-full h-12 border-b-2 border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    <span className="absolute right-0 top-3 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </span>
                </div>

                <div className="relative w-10/12">
                    <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                        className="w-full h-12 border-b-2 border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    <span className="absolute right-0 top-3 text-gray-400">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M16.5 10.5V6.75A3.75 3.75 0 0012.75 3h-1.5a3.75 3.75 0 00-3.75 3.75v3.75M7.5 10.5h9M9.75 13.5v1.5m4.5-1.5v1.5"
                            />
                        </svg>
                    </span>
                </div>

                <button onClick={handleSubmit} className="w-10/12 h-12 bg-gradient-to-r from-black to-blue-600 text-white rounded-full text-lg font-semibold hover:from-blue-800 hover:to-black">
                    Login
                </button>
                <p>
                    Don't have an account?
                    <span className="text-blue-700 hover:underline hover:underline-offset-1 cursor-pointer" onClick={handleSignup}> Sign Up</span>
                </p>

            </div>
        </div>
    );
};

export default LoginSignUp;
