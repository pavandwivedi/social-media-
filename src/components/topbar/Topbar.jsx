import React from 'react'
import "./topbar.css"
import {Search,Person,Chat,Notifications} from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className = "topbarcontainer">
        <div className="topbarLeft">
            <span className="logo">Social Media App</span>
        </div>
        <div className="topbarCentre">
            <div className="searchbar">
                
            <input placeholder='search for friend,post or video' className="searchInput" />
               <Search className="searchIcon"/>
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Home</span>
                <span className="topbarLink">TimeLine</span>

            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                     <Person/>
                     <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                     <Chat/>
                     <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                     <Notifications/>
                     <span className="topbarIconBadge">3</span>
                </div>
            </div>
            <img src="assets/person/1.jpeg" alt="" className="topbar" />
        </div>
    </div>
  )
}
