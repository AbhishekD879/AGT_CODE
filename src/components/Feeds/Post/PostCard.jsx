import React, { useRef, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ShareIcon from '@mui/icons-material/Share';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined'; 
import "./PostCard.css"

import userPost from '../../../lib/postCardUserPost';


const PostCard = () => {
    const reldiv=useRef()
    const [moreOption,setMoreOption]=useState("active")
    let moreoptionHandler=(e)=>{
        console.log(e.currentTarget.id,reldiv.currentTarget);
        if(e.currentTarget.id){
        if(moreOption==="active"){
            setMoreOption("");
            
        }else{
            setMoreOption("active");
           
        }
       }
       
        
    }
    let changehandler=(e)=>{
        console.log(e.target);
    }
    return (
       <>
       {userPost.map((item,index)=>(
           
        <div key={index} className="postcard">
        
        {item.bannerImagePath.isposted?<div className="postcard__imgContainer">
            <img src={item.bannerImagePath.path} />
        </div>:null}
            <div className="postcard__infocontainer">
            <h5>{item.eventType}</h5>
            <div className="postcard__title">
                <h3>{item.title}</h3>
                <div className="postcard__moreOption__buttongrp">
                <IconButton id={index} onClick={(e)=>moreoptionHandler(e)}><MoreHorizIcon /></IconButton>
                <div ref={reldiv}  on={(e)=>{changehandler(e)}} className={`post__moreOption ${moreOption}`}>
                    <div className="moreOption">Edit</div>
                    <div className="moreOption">Report</div>
                    <div className="moreOption">Option 3</div>
                </div>
                </div>
            </div>
            {item.locationInfo.isposted?<div className="postCard__locationContainer">
                <div className="postcard__desi">
                    <p>{item.locationInfo.locinfo.date}</p>
                </div>
                <div className="postcard__Loc">
                    <RoomOutlinedIcon />
                    <p>{item.locationInfo.locinfo.locationofUser}</p>
                </div>
            </div>:null}
            {item.link.isposted?item.link.joblink?<a href="#" className="postCard__desi__link">
                {item.link.joblink}
            </a>:<a href="#" className="postCard__desi__link">
                {item.link.weblink}
            </a>:null}
           {item.subtitle.isposted? <p>{item.subtitle.sub}</p>:null}
            <div className="postcard__Reach">
                <div className="postcart__userAvatar">
                    <IconButton><Avatar src={item.profile.profilepic}/></IconButton>
                   
                    <p>{item.profile.userName}</p>
                </div>
                <div className="postcard__viewsContainer">
                    <div className="postcard__views" >
                        <RemoveRedEyeOutlinedIcon />
                        <p>1.4k views</p>
                    </div>
                    <div className="postcard__shareIcon">
                    <IconButton><ShareIcon /></IconButton>
                    </div>
                </div>
            </div>
            </div>
        </div>
       ))}
       </>
    )
}

export default PostCard
