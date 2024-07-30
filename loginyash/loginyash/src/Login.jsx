import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Login() {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');  // Clear any existing errors
        try {
            const response = await axios.post('http://localhost:3001/login', { email, password });
            if (response.status === 200) {
                console.log('Login successful:', response.data);
                navigate('/home')
                // Navigate or perform further actions as needed
            }
        } catch (err) {
            setError(err.response?.data?.message || 'An error occurred. Please try again.');
            console.error('Login error:', err);
        }
    };

    return (
      
        <div className ="d-flex justify-content-center align-items-center bg-secondary vh-100 "
        style={{
            backgroundImage: "url('sea-7571473_1280.webp')",
            backgroundSize: "cover",
            backgroundPosition:'center',

        }}> 
        
            <div className=" p-3 rounded w-25 bg-white border text-body" 
           style={{
            backgroundSize: "cover",
            backgroundPosition:'center'}} >
                <h2 style={{
                    color: 'black',
                }}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong style={{
                                color: 'black',
                            }}>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email "
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            style={{
                                background: "pink",
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong>Password</strong>
                        </label>
                        <input
                            type="password"
                            placeholder="Enter Password"
                            autoComplete="off"
                            name="password"
                            className="form-control rounded-0"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            style={{
                                background: "pink",
                            }}
                        />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <button type="submit" className="btn btn-success w-100 rounded-0 "
                    style={{
                        background: "grey",
                        color: "white",
                    }} >
                        Login
                    </button>
                </form>
                <p style={{
                    color: "black",
                }}>Don't have an account?</p>
                <Link to="/register" className="btn btn-default border w-100 bg- rounded-0" style={{
                    color:"white",
                    background:"grey"
                }}>
                    Signup
                </Link>
            </div>
        </div>
       
        
    );
}

export default Login;
