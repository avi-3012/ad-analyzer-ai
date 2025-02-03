import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const noOfBarInGraph = new Array(30).fill(0);
  return (
    <div style={{ flex: 1, padding: "50px" }}>
      <div style={{ fontWeight: "bold", color: "#1f2a67", fontSize: "25px" }}>
        Ad Campaign Dashboard
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "60px",
          width: "100%",
          gap: "20px",
        }}
      >
        <div
          style={{
            width: "30%",
            flexDirection: "column",
            backgroundColor: "#1f2a67",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 0px 25px -10px black",
          }}
        >
          <div style={{ fontWeight: "bold", color: "white", fontSize: "15px" }}>
            Total Campaigns
          </div>
          <div style={{ fontWeight: "bold", color: "white", fontSize: "22px" }}>
            5
          </div>
        </div>
        <div
          style={{
            width: "30%",
            flexDirection: "column",
            backgroundColor: "#1f2a67",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 0px 25px -10px black",
          }}
        >
          <div style={{ fontWeight: "bold", color: "white", fontSize: "15px" }}>
            Total Impressions
          </div>
          <div style={{ fontWeight: "bold", color: "white", fontSize: "22px" }}>
            5,000
          </div>
        </div>
        <div
          style={{
            width: "30%",
            flexDirection: "column",
            backgroundColor: "#1f2a67",
            padding: "10px",
            borderRadius: "10px",
            boxShadow: "0px 0px 25px -10px black",
          }}
        >
          <div style={{ fontWeight: "bold", color: "white", fontSize: "15px" }}>
            Total Clicks
          </div>
          <div style={{ fontWeight: "bold", color: "white", fontSize: "22px" }}>
            500
          </div>
        </div>
      </div>
      <div style={{ fontWeight: "bold", color: "#1f2a67", fontSize: "18px" }}>
        Marketplace
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "40px",
          marginBottom: "40px",
          width: "100%",
          gap: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px -10px black",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px",
              gap: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{ fontWeight: "bold", color: "#1f2a67", fontSize: "15px" }}
            >
              Data Analytics Overwiew
            </div>
            <div style={{ color: "gray", fontSize: "14px" }}>
              See how your ads are performing and make data-driven decisions.
            </div>
          </div>
          <div
            style={{
              width: "100px",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              overflow: "hidden",
              paddingRight: "30px",
              paddingLeft: "10px",
            }}
          >
            <Link to="/upload">
            <div
              style={{
                width: "120px",
                height: "40px",
                borderRadius: "10px",
                backgroundColor: "#1f2a67",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                color: "white",
                textDecoration:"none"
              }}
            >
              Get Started
            </div>
            </Link>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "row",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px -10px black",
          }}
        >
          <div
            style={{
              flex: 1,
              padding: "20px",
              gap: "10px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{ fontWeight: "bold", color: "#1f2a67", fontSize: "15px" }}
            >
              Finance Flow
            </div>
            <div style={{}}>
              <div
                style={{
                  fontWeight: "bold",
                  color: "#1f2a67",
                  fontSize: "22px",
                }}
              >
                $3,570
              </div>
              <div
                style={{
                  color: "gray",
                  fontSize: "15px",
                }}
              >
                December 2024
              </div>
            </div>
          </div>
          <div
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              overflow: "hidden",
              padding: "20px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                // backgroundColor: "#1f2a67",
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                overflow: "hidden",
                color: "white",
                gap: "1px",
              }}
            >
              {noOfBarInGraph.map((_, index) => (
                <div
                  key={index}
                  style={{
                    borderRadius: "2px",
                    width: "5px",
                    height: index===20? "70%" :Math.floor(Math.random() * 60 + 10) + "px",
                    backgroundColor: index===20?"#1f2a67":"#f1f1fb",
                    boxShadow: "0px 0px 10px -5px black",
                    margin: "0 1px",
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
