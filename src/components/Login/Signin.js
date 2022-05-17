import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import './signin.css'
// import { ToastContainer, toast } from "react-toastify";
// import { Link } from "react-router-dom";

function Signin() {

    const [formValid, setFormValid] = useState(false)
    const [form, setForm] = useState({
        name: "",
        email: "",
    });


    useEffect(() => {
        if (
            form.name !== "" &&
            form.email !== ""
             )
              {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [form])



        const handleChange = (e) => {
            setForm({
                ...form,
                [e.target.name]: e.target.value
            });
        };

        const submitHandler = (e) => {
            e.preventDefault();
            sessionStorage.setItem('userDetails', JSON.stringify({ ...form }));

            window.location = "/";
        };



        return (
            <div className="auth_signup">
                {/* <ToastContainer /> */}

                <div className="guard">
                    <h1> Login</h1>
                    <form onSubmit={submitHandler}>

                        <input type="text" placeholder=" Name" name="name" onChange={handleChange} />
                        <p> {form.name} </p>
                        <input type="email" required placeholder="Contact Email" name="email" onChange={handleChange} />
                        <p> {form.email} </p>
                        <div style={{ display: "flex", alignItems: "flex-start" }}>
                            <input type="checkbox" style={{ width: "25px", margin: "-7px 7px 0 0" }} id="readTerms" />
                            <p>I have read, understood and i agree to the terms and conditions</p>
                        </div>
                        <Link to="/Client"> <button
                            className={formValid ? "auth_signup-active" : "auth_signup-submit"}
                        >
                            Login 

                        </button>
                        </Link>

                    </form>
                </div>

            </div>
        );
    }

export default Signin;