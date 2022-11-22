import React from 'react'
import './Header.css'
import logo from "./AgtLOGO.png"
import {IconButton, Typography} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { makeStyles } from '@mui/styles';
import {useDispatch } from 'react-redux';
import { accounttoggle } from '../../actions';
const useStyle=makeStyles({
    searchicon:{
        position:"relative",
        right: '-50px',
    }
})
const Header = () => {
    const dispatch = useDispatch();
    const classes=useStyle();
    return (
        <div className="header">
            
                <a href="#"><img src={logo} alt="Agt" /></a>
           
            <div className="header__searchContainer">
                <IconButton className={classes.searchicon}><SearchIcon /></IconButton>
                <input type="text" placeholder="Search for your favorite groups in ATG" />
                
            </div>
            <div className="header__userAccountStatus">
            <Typography variant="body2">Create account. <span onClick={()=>{dispatch(accounttoggle())}} className="header__userAccountStatus__link">It’s free!</span></Typography>
            <IconButton><ArrowDropDownIcon /></IconButton>
            </div>
        </div>
    )
}

export default Header
