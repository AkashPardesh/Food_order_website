import React from "react";
import classes from './Header.module.css';
import image from '../../assets/photo.jpg';
import HeaderCartButton from "./HeaderCartButton";

function Header(props){

    return(
        <React.Fragment>
            <header className={classes.header}>
                <h1>Nisharg</h1>
            <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="The table with delicious meals"></img>
            </div>
        </React.Fragment>

    );


}


export default Header;