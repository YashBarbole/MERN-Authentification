import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate=useNavigate()

    const handleSubmit =  (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', { name, email, password })
        .then(result=>{console.log(result)
            navigate('/login')

        })
            // Handle success here, e.g., show a success message or redirect
        .catch (err=> console.error(err));
            
        }
    

    return (
        <div className="d-flex justify-content-center align-items-center bg-secondary vh-100 "
        style={{
            backgroundImage: "url('sea-7571473_1280.webp')",
            backgroundSize: "cover",
            backgroundPosition:'center',

        }}>
            <div className="bg-white p-3 rounded w-25 border light text-success">
                <h2 style={{
                    color: 'black',
                }}>Register</h2>
                <form onSubmit={handleSubmit}>
                    {error && <div className="alert alert-danger">{error}</div>}
                    <div className="mb-3">
                        <label htmlFor="name">
                            <strong style={{
                                color:"black"
                            }}>Name</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter Name"
                            autoComplete="off"
                            name="name"
                            className="form-control rounded-0"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            style={{
                                background:"pink"
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email">
                            <strong style={{
                                color:"black"
                            }}>Email</strong>
                        </label>
                        <input
                            type="email"
                            placeholder="Enter Email"
                            autoComplete="off"
                            name="email"
                            className="form-control rounded-0"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            style={{
                                background:"pink"
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password">
                            <strong style={{
                                color:"black"
                            }}>Password</strong>
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
                                background:"pink"
                            }}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0"
                    style={{
                        background:"grey",
                        color:'white'
                    }}>
                        Register
                    </button>
                </form>
                <p style={{
                    color:"black",
                }}>Already have an account?</p>
                <Link to="/login" className="btn btn-default border w-100 rounded-0"
                style={{
                    background:"grey",
                    color:"white"
                }}>
                    Login
                </Link>
            </div>
        </div>
    );
}

export default Signup;
