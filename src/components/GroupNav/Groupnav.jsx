import { Divider } from '@mui/material'
import React from 'react'
import "./GroupNav.css"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import { makeStyles } from '@mui/styles';
const useStyle=makeStyles({
    groupnav__writePost:{
        marginLeft:'16.42px'
    },
    groupnav__joinGroup:{
        marginRight:'6px'
    }
})
const Groupnav = () => {
    const classes=useStyle()
    return (
        <>
        <Divider variant="middle" />
        <div className="groupNav__navbar">
            <div className="groupNav__post">Post(368)</div>
            <div className="groupNav__navLink__holder">
                <a className="groupNav__navLink">All Posts(32)</a>
                <a className="groupNav__navLink">Article</a>
                <a className="groupNav__navLink">Event</a>
                <a className="groupNav__navLink">Education</a>
                <a className="groupNav__navLink">Job</a>
            </div>
            <div className="groupNav__buttonContainer">
                <div className="groupNav__btn grpnavWrite">Write a Post <ArrowDropDownIcon className={classes.groupnav__writePost} /></div>
                <div className="groupNav__btn  grpnavjoinGroup"><GroupAddIcon className={classes.groupnav__joinGroup} /> Join Group</div>
            </div>
            <div className="groupNav__btn grpnavWrite groupNav__filter">Filter: All <ArrowDropDownIcon className={classes.groupnav__writePost} /></div>
        </div>
        <Divider variant="middle" />
        </>
    )
}

export default Groupnav
