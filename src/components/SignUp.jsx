import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../services/loginSignupService";

const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const navigate = useNavigate();

    const handleLogin = () => {
        navigate("/login");
    };

    const validateEmail = (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            setEmailError("Invalid email format!");
        } else {
            setEmailError("");
        }
    };

    const validatePhone = (value) => {
        if (value.length !== 10 || !/^[0-9]+$/.test(value)) {
            setPhoneError("Phone number must be exactly 10 digits!");
        } else {
            setPhoneError("");
        }
    };

    const validatePassword = (value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(value)) {
            setPasswordError(
                "Password must be at least 8 characters long, include one uppercase letter, one lowercase letter, one digit, and one special character."
            );
        } else {
            setPasswordError("");
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || emailError || phoneError || passwordError) {
            alert("Please fix the errors before submitting!");
            return;
        }

        console.log("Form submitted successfully:", { name, email, phone, password });
        var items = {name,email,phone,password};
        var user = registerUser(items);
        user.then((
            res
        )=>{
            console.log(res.data.token);
            localStorage.setItem('userToken', `Bayeres ${res.data.token}`);
            navigate('/')
        });
    };

    return (
        <div className="h-screen w-screen bg-gradient-to-br from-white via-blue-300 via-blue-700 to-black flex items-center justify-center">
            <div className="h-2/3 w-1/3 pl-10 bg-white rounded-lg shadow-lg flex flex-col items-center justify-center space-y-5">
                <p className="text-blue-900 text-5xl font-bold font-poppins">Sign Up</p>
                <div className="relative w-10/12 pt-0">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Full Name"
                        className="w-full h-12 border-b-2 border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="relative w-10/12">
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            validateEmail(e.target.value);
                        }}
                        type="email"
                        placeholder="Email"
                        className="w-full h-12 border-b-2 border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    {emailError && <p className="text-red-600 text-sm">{emailError}</p>}
                </div>
                <div className="relative w-10/12">
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => {
                            setPhone(e.target.value);
                            validatePhone(e.target.value);
                        }}
                        placeholder="Phone Number"
                        className="w-full h-12 border-b-2 border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
                </div>
                <div className="relative w-10/12">
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value);
                            validatePassword(e.target.value);
                        }}
                        type="password"
                        placeholder="Password"
                        className="w-full h-12 border-b-2 border-gray-300 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-blue-500"
                    />
                    {passwordError && <p className="text-red-600 text-sm">{passwordError}</p>}
                </div>
                <button
                    onClick={handleSubmit}
                    className="w-10/12 h-12 bg-gradient-to-r from-black to-blue-600 text-white rounded-full text-lg font-semibold hover:from-blue-800 hover:to-black"
                >
                    Register
                </button>
                <p className="pt-0">
                    Already have an account?
                    <span
                        className="text-blue-700 hover:underline hover:underline-offset-1 cursor-pointer"
                        onClick={handleLogin}
                    >
                        Login
                    </span>
                </p>
            </div>
            <div className="pr-20 h-2/3 w-1/3 bg-white rounded-lg shadow-lg relative md:block hidden">
                <img
                    src="/logo3.png"
                    alt="Logo"
                    className="w-full pt-20 justify-center items-center absolute"
                />
            </div>
        </div>
    );
};

export default SignUp;
