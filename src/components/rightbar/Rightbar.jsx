import "./rightbar.css"
import {Users} from "../../dummyData.js"
import Online from "../online/Online.jsx"

export default function Rightbar() {
  return (
    <div className ="rightbar">
        <div className="rightbarWrapper">
          <div className="birthdayContainer">
            <img src="assets/gift.png" alt="" className="birthdayImage" />
            <span className="birthdayText">
              <b>Nirupam Tiwari</b> and <b>3 other friend</b> have birthday today
            </span>
          </div>
          <img src="assets/ad.png" alt="" className="rightbarAd" />
          <h4 className="rightbarTitle">Online Friends</h4>
          <ul className="rightbarFriendList">
           {Users.map(u =>(
            <Online key={u.id} user={u}/>
           ))}
            
          </ul>
        </div>
    </div>
  )
}
