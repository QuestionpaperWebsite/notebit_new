"use client";
import Link from 'next/link';
import React, { useEffect } from "react";
import axios from "axios";
import {Navigate} from 'react-router-dom'
import { useRouter } from 'next/navigation';
import style from '../css/loginpage.module.css'
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { toast } from "react-hot-toast";
export default function SignupPage(){

    const router = useRouter();

    const [user, setUser] = React.useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        confirmpass: ""

    })

    const signupres = async () => {
        try {
            const response = await axios.post("api/users/signup", user);
            router.push("/login")
        } 
        catch (error:any) {
            console.log("Sign up failed", error.message);
        }
}

    return(
        <section className={style.loginmain}>
            <div className={style.box}></div>
            <div className={style.box}></div>

            <div className={style.mainwindow}>
                <div className={style.mainwindowinnercontent}>
                    <div className={style.logo}>NOTEBIT</div>
                    <div className={style.loginwindow}>
                        <form className={style.signup}>
                            <div className={style.formtext}>Create Your Account</div>
                            <input type="text" id="firstname" value={user.firstname} onChange={(e)=> setUser({...user, firstname: e.target.value })} placeholder='First Name'/><br/>
                            <input type="text" id="lastname" value={user.lastname} onChange={(e)=> setUser({...user, lastname: e.target.value })} placeholder='Last Name'/><br/>
                            <input type="mail" id="email" value={user.email} onChange={(e)=> setUser({...user, email: e.target.value })} placeholder='Email'/><br/>
                            <input type="password" id="pass" value={user.password} onChange={(e)=> setUser({...user, password: e.target.value })} placeholder='Password'/><br/>
                            <input type="password" id="cpass" value={user.confirmpass} onChange={(e)=> setUser({...user, confirmpass: e.target.value })} placeholder='Confirm Password'/><br/>
                            <div className={style.buttonholder}>
                                <button className={style.buttonsignup} onClick={signupres}>Sign Up</button>
                            </div>
                            <div className={style.bottomtext}>Already have an account? <span><Link href="/login" className={style.oo}>Sign In</Link></span></div>
                            <div className={style.otherlogon}>Signup with<span><FcGoogle/></span><span><BsGithub/></span></div>
                        </form>
                    </div>
                </div> 
            </div>
            <div className={style.bottomimg}>NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT</div>
        </section>
    );
}
