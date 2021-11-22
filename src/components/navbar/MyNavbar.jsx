import React from "react";
import "./MyNavbar.css";
import { Language, NotificationsNone, Settings } from "@mui/icons-material/";

export default function MyNavbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Berk Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img src="https://medyailanlari.com/wp-content/uploads/2020/10/YazilimGelistirmeSlider2_optimized.jpg" alt="profile" className="profileAvatar" />
        </div>        
      </div>
    </div>
  );
}
