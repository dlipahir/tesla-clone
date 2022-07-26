import React,{useState} from "react";
import mainLogo from '../../images/logo.svg'
import closeLogo from '../../images/close.svg'
// import 'navbar.styles.scss'
import './navbar.styles.scss'
const navArray=[
    {
        tag:"Existing Inventory"
    },
    {
        tag:"Used Inventory"
    },
    {
        tag:"Trade-In"
    },
    {
        tag:"Test Drive"
    },
    {
        tag:"Insurance"
    },
    {
        tag:"Cybertruck"
    },
    {tag:"Roadster"},
    {tag:"Semi"},
    {tag:"Charging"},
    {tag:"Powerwall"},
    {tag:"Commercial Energy"},
    {tag:"Utilities"},
    {tag:"Find Us"},
    {tag:"Support"},
    {tag:"Investor Relations"},
]
const Navbar = () => {
    const [isSidebarOpen,setisSidebarOpen] = useState(false);
    function sidebarHandler(){
        setisSidebarOpen(!isSidebarOpen);
    }
    return (
        <div className="navbar">
            {
                (isSidebarOpen) ? 
            <div className="sidebar">
                <ul>
                    <img className="close-sidebar" src={closeLogo} alt="" onClick={sidebarHandler}/>               {
                navArray.map((ele)=>{

                    return (<li className="sidebar-link">{ele.tag}</li>);
                }
                )
               }</ul>
            </div>: null
}
            <div className="main-logo">
                <img src={mainLogo} alt="" />
            </div>
            {
                window.matchMedia('(min-width: 1024px)').matches ? ( <>
            <div className="middle-nav">
                <ul>
                    <li>Model S</li>
                    <li>Model 3</li>
                    <li>Model X</li>
                    <li>Model Y</li>
                    <li>Solar Roof</li>
                    <li>Solar Panels</li>
                </ul>
            </div> 
            <div className="right-nav">
                <ul>
                    <li>Shop</li>
                    <li>Account</li>
                    <li onClick={sidebarHandler}>Menu</li>
                </ul>
            </div></>): (<div className="right-nav">
                <ul>
                    <li onClick={sidebarHandler}>Menu</li>
                </ul>
            </div>)
            }
        </div>
    )
}

export default Navbar;