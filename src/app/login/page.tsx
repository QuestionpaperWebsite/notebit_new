"use client";
import Link from 'next/link';
import React from "react";
import { useRouter } from 'next/navigation';
import style from '../css/loginpage.module.css'
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
export default function LoginPage(){
    const [user,setUser] = React.useState({
        email: "",
        password: "",
        username: "",
    })

    const onSignup = async() =>{

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
                            <div className={style.formtext}>Sign in to NOTEBIT</div>
                            <input type="text" id="" name="" placeholder='Email ID'/><br/>
                            <input type="text" id="" name="" placeholder='Password'/><br/>
                            <div className={style.buttonholder}>
                                <button className={style.buttonsignup}>Sign In</button>
                            </div>
                            <div className={style.bottomtext}>Don't have an account? <span>Sign Up</span></div>
                            <div className={style.otherlogon}>Login with<span><FcGoogle/></span><span><BsGithub/></span></div>
                        </form>
                    </div>
                </div> 
            </div>
            <div className={style.bottomimg}>NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT NOTEBIT</div>
        </section>
    );
}