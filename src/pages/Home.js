import React from 'react'
import Navbar from '../components/Navbar'
import Book from "../assets/home/images.jpeg"
import { Link } from 'react-router-dom'

const Home = () => {
    // const [count, setCount] = useState(10)


    return (


        <div className='home'>

            <Navbar />

            <div className='home-content'>
                <div className='home-content-text'>
                    <h1> Join the fastest growing community of traders</h1>
                    <p> Capstone is a platform where you get access to quality analysis,
                        join a community of online traders, get the latest information on big moves in the market.</p>

                    <Link to="/Signup"> <button> Get started for free</button> </Link>
                    <p>Alreadly have an account?, Sign in</p>
                    <Link to="/Signin"> <button> Sign in</button> </Link>



                </div>

                <div className='home-content-image'>
                    <img src={Book} alt="icon" />
                </div>



            </div>


        </div>
    )
}

export default Home