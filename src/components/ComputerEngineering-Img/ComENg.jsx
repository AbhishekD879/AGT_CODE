import React from 'react'
import "./ComENg.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
const useStyles=makeStyles({
    backarrow:{
        
        ['@media screen and (min-width:600px)']:{
            display:'none !important',
        },
        ['@media screen and (max-width:600px)']:{
            position:"absolute",
            top:'5%',
            left:'3%',
            color:'white',
            display:'block',
            cursor:'pointer'
        }
    }
})
const ComENg = () => {
    const classes=useStyles()
    return (
        <div className="CompEng">
       
        <ArrowBackIcon className={classes.backarrow}  fontSize="large" />
      
            
            <div className="CompEng__joinNow">Join Group</div>
            <div className="CompEng__Info">
            <h1>Computer Engineering</h1>
            <p>142,765 Computer Engineers follow this</p>

            </div>
        </div>
    )
}

export default ComENg
