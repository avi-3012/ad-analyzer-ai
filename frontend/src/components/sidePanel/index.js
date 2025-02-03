import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {
    const {pathname} = useLocation()
    console.log(pathname)
  return (
    <div style={{position:"relative",flex:1, backgroundColor:"#f1f1fb", height:"100vh", borderRight:"1px solid #d5dbff", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
        <div style={{width:"100%",position:"absolute", top:"40px", display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <div style={{width:"80px", borderRadius:"15px", backgroundColor:"white", padding:"25px", boxShadow:"0px 0px 25px -15px black"}}>
                <div style={{width:"50px", height:"50px", borderRadius:"50%", backgroundColor:"#d5dbff", display:"flex", justifyContent:"center", alignItems:"center", overflow:"hidden", margin:"0 auto"}}>
                    <img src="https://loremflickr.com/200/200" alt="logo"/>
                </div>
                <div style={{textAlign:"center", fontWeight:"bold", color:"#1f2a67", marginTop:"10px"}}>Avinash</div>
            </div>
        </div>
        <div style={{position:"relative", bottom:"60px"}}>
            <Link to="/" style={{textDecoration:"none"}}>
            <div style={{padding:"10px", margin:"10px", fontWeight:"bold", color:(pathname==="/")?"#1f2a67":"#9aa3d4", borderRadius:"10px", backgroundColor:(pathname==="/")?"#d5dbff":"", fontSize:"15px"}}>
                Dashboard
            </div>
            </Link>
            <Link to="/upload" style={{textDecoration:"none"}}>
            <div style={{padding:"10px", margin:"10px", fontWeight:"bold", color:((pathname==="/upload") || (pathname==="/analyze"))?"#1f2a67":"#9aa3d4", borderRadius:"10px", backgroundColor:((pathname==="/upload")||(pathname==="/analyze"))?"#d5dbff":"", fontSize:"15px"}}>
                Analyze
            </div>
            </Link>
            <Link to="/profile" style={{textDecoration:"none"}}>
            <div style={{padding:"10px", margin:"10px", fontWeight:"bold", color:(pathname==="/profile")?"#1f2a67":"#9aa3d4", borderRadius:"10px", backgroundColor:(pathname==="/profile")?"#d5dbff":"", fontSize:"15px"}}>
                Profile
            </div>
            </Link>
            <Link to="/wallet" style={{textDecoration:"none"}}>
            <div style={{padding:"10px", margin:"10px", fontWeight:"bold", color:(pathname==="/wallet")?"#1f2a67":"#9aa3d4", borderRadius:"10px", backgroundColor:(pathname==="/wallet")?"#d5dbff":"", fontSize:"15px"}}>
                Wallet
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Menu