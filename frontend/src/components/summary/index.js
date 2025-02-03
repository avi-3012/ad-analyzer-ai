import React from 'react'

const Summary = () => {
  return (
    <div style={{flex:1, backgroundColor:"white", height:"100vh", paddingLeft:"60px", paddingTop:"50px"}}>
        <div style={{fontWeight:"bold", fontSize:"30px", color:"#1f2a67"}}>
        Summary
        </div>
        <div style={{display:"flex", flexDirection:"column",width:"200px",borderRadius:"20px", boxShadow:"0px 0px 10px -10px black", padding:"15px", marginTop:"30px", gap:"20px"}}>
            <div style={{fontSize:"15px", color:"gray"}}>Your balance</div>
            <div style={{fontWeight:"bold", fontSize:"30px", color:"#1f2a67"}}>$23,980.00</div>
            <div style={{display:"flex", fontSize:"12px"}}>
            <div style={{color:"#3bb188", marginRight:"2px"}}>▲</div>$2,507.09
                <div style={{color:"#e6385f", marginLeft:"40px", marginRight:"2px"}}>▼</div>$2,507.09
            </div>
        </div>
        <div style={{display:"flex", flexDirection:"column",width:"250px", marginTop:"30px"}}>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:"15px", color:"gray", borderBottomWidth:"1px", borderBottomColor:"#f1f1fb", borderBottomStyle:"solid", paddingBottom:"20px"}}>
                <div style={{fontWeight:"bold", fontSize:"20px", color:"#1f2a67"}}>Activity</div>
                <div style={{fontSize:"12px", color:"gray"}}>SEE ALL</div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:"15px", color:"gray", paddingTop:"20px", paddingBottom:"20px"}}>
                <div style={{height:"30px", width:"30px", backgroundColor:"red", borderRadius:"5px"}}></div>
                <div style={{display:"flex", flexDirection:"column", flex:1, marginLeft:"10px"}}>
                    <div style={{fontWeight:"bold", fontSize:"14px", color:"#1f2a67"}}>Withdraw</div>
                    <div style={{fontSize:"12px", color:"gray"}}>10:49 am</div>
                </div>
                <div>
                    <div style={{fontSize:"14px", color:"#1f2a67"}}>-$2,507.09</div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:"15px", color:"gray", paddingTop:"10px", paddingBottom:"20px"}}>
                <div style={{height:"30px", width:"30px", backgroundColor:"green", borderRadius:"5px"}}></div>
                <div style={{display:"flex", flexDirection:"column", flex:1, marginLeft:"10px"}}>
                    <div style={{fontWeight:"bold", fontSize:"14px", color:"#1f2a67"}}>Deposit</div>
                    <div style={{fontSize:"12px", color:"gray"}}>10:49 am</div>
                </div>
                <div>
                    <div style={{fontSize:"14px", color:"#1f2a67"}}>+$10,000.00</div>
                </div>
            </div>
            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", fontSize:"15px", color:"gray", paddingTop:"10px", paddingBottom:"20px"}}>
                <div style={{height:"30px", width:"30px", backgroundColor:"blue", borderRadius:"5px"}}></div>
                <div style={{display:"flex", flexDirection:"column", flex:1, marginLeft:"10px"}}>
                    <div style={{fontWeight:"bold", fontSize:"14px", color:"#1f2a67"}}>Maintenance</div>
                    <div style={{fontSize:"12px", color:"gray"}}>10:49 am</div>
                </div>
                <div>
                    <div style={{fontSize:"14px", color:"#1f2a67"}}>-$316.11</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Summary