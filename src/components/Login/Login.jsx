import React, { useState } from 'react'
import "./Login.css"
import loginpng from "./../../assets/loginSignUp.png"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import { IconButton} from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import CancelIcon from '@mui/icons-material/Cancel';
import { useSelector,useDispatch } from 'react-redux';
import { accounttoggle } from '../../actions';
import {creatAccount} from '../../actions';
import { makeStyles } from '@mui/styles';



const useStyles=makeStyles({
    eyepos:{
        position:'relative',
        left:'-2.5rem'
    },
    cancleBtn:{
        position:'absolute',
        // right:'-710px',
        color:'grey !important',
        // top:'-2.5rem'
        float:'right'
    }
})


let SignUp=()=>{
    const classes=useStyles()
    return(
        <div className="SignUp">
            <div className="SignUp__form">
                <div className="SignUp__Name">
                    <input className="SignUp__FirstName" placeholder="First Name" type="text" />
                    <input className="SignUp__LastName" placeholder="Last Name" type="text" />
                </div>
                <input className='SignUp__Email' placeholder="Email" type="text" />
                <div className="SingUp__Password__Container">
                    <input className="Signup__Password" placeholder="Password" type="text" />
                   
                    
                    <IconButton className={classes.eyepos} ><VisibilityOutlinedIcon /></IconButton>
                    
                </div>
                <input className="ConfirmPassword" placeholder="Confirm Password" type="text" />
            </div>
            <div className="CreateAccount">Create Account</div>
            <div className="SignupwithFacebook">
            <FacebookOutlinedIcon />
            Sign up with Facebook
            </div>
            <div className="SignupwithGoogle" >
            <GoogleIcon />
            Sign up with Google
            </div>
        </div>

    )

}



let LoginUp=()=>{
    const classes=useStyles()
    
    return(
        <div className="SignUp">
            <div className="SignUp__form">
                
                <input className='SignUp__Email' placeholder="Email" type="text" />
                <div className="SingUp__Password__Container">
                    <input className="Signup__Password" placeholder="Password" type="text" />
                   
                    
                    <IconButton className={classes.eyepos} ><VisibilityOutlinedIcon /></IconButton>
                    
                </div>
                
            </div>
            <div className="CreateAccount">Sign In</div>
            <div className="SignupwithFacebook">
            <FacebookOutlinedIcon />
            Sign up with Facebook
            </div>
            <div className="SignupwithGoogle" >
            <GoogleIcon />
            Sign up with Google
            </div>
            <div className="forgetPass">
            Forgot Password?
            </div>
        </div>

    )

}



let SignUpHeading=()=>{
    const createacc= useSelector(state => state.creatAccountStatus)
    
    const dispatch = useDispatch();
    return(
        <div className="SignUpHeading">
        <h1>Create Account</h1>
        <p>Already have an account? <span onClick={()=>{dispatch(creatAccount())}}> Sign In</span></p>
        </div>
    )
}


let LoginHeading=()=>{
    const dispatch = useDispatch();
    return(
        <div className="SignUpHeading">
        <h1>Sign In</h1>
        <p>Don’t have an account yet?<span onClick={()=>{dispatch(creatAccount())}}> Create new for free!</span></p>
        </div>
    )
}


const Login = () => {
    const createacc= useSelector(state => state.creatAccountStatus)

    const dispatch = useDispatch();
    const state = useSelector(state => state.accountclose)
    console.log(state);
    const classeslog=useStyles()
    const[login,setlogin]=useState('signUp')
    return (
       <>
      
       {state==='open'? <div className="loginSignup">
        <IconButton onClick={()=>{dispatch(accounttoggle())}} className={classeslog.cancleBtn}><CancelIcon></CancelIcon></IconButton>
            <div className="loginheadin__main">Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼</div>
            <div>
                {createacc==="creatAccount"?<SignUpHeading />:<LoginHeading />}
                {/* <SignUpHeading /> */}
            </div>
            <div className="login__manibody">
                <div className="login/signup">
                {/* <SignUp /> */}
                {createacc==="creatAccount"?<SignUp/>:<LoginUp/>}
                {/* <LoginUp /> */}
                </div>
                <div className='login__ImgContainer'>
                <img src={loginpng} />
                </div>
            </div>
        </div>:null}
        </>
    )
}

export default Login
