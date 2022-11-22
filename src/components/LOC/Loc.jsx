import React, { useState } from 'react'
import "./Loc.css"
import recGrp from '../../lib/reccommondedgroup';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import { TextField } from '@mui/material';
import { Avatar } from '@mui/material';
import { makeStyles } from '@mui/styles';


const useStyles=makeStyles({
    loctionioc:{
        position:'relative',
        left:"10%"
    },
    locationclearioc:{
        position:'relative',
        right:"10%"
    },
    locAlert__ioc:{
        fontSize:'12px',
        color:'gray',
        marginRight:"8.33px"
    },
    
})
const Loc = () => {
    const classes=useStyles()
    const [follow,setfollow]=useState('')
    const followbtn=(e)=>{
        console.log(e.currentTarget.id);
       switch(e.currentTarget.id){
            case 1:{
                if(follow===""){
                    setfollow('followed')
                }else{
                    setfollow('')
                }
            }
       }
    }
    return (
        <div className="loc">
           <div className="loc__container">
           <RoomOutlinedIcon className={classes.loctionioc} />
            <TextField id="standard-basic" variant="standard" inputProps={{placeholder:'|Enter your location'}} />
            <ClearRoundedIcon className={classes.locationclearioc} />
           </div>
           <div className="loc__Alert">
            <ErrorOutlineIcon className={classes.locAlert__ioc} fontSize="small" />
            <p>Your location will help us serve better and extend a personalised experience.</p>
           </div>
           <div className="recommondedgroup">
                <div className="recommondedgroup__title">
                <ThumbUpOffAltIcon />
                <p>Recommended Groups</p>
                </div>

                {recGrp.map((item,index)=>(
                    <div className="recommondedgroup__Shown">
                    <div className="groupshow">
                        <Avatar src={item.group} />
                        <h5>{item.name}</h5>
                    </div>
                    <div onClick={(e)=>followbtn(e)} className={`recommonded__followBtn ${follow}`}>
                        follow
                    </div>
                </div>
                ))}
                <a className="loc__showmore" href="#">
                    See more...
                </a>
           </div>
        </div>
    )
}

export default Loc
