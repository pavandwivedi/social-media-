import "./profile.css"
import Topbar from "../../components/topbar/Topbar"
import Leftbar from "../../components/leftbar/Leftbar"
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'

export default function Profile() {
  return (
    <div>
        <Topbar/>
       <div className="profile">
        <Leftbar/>
        <div className="profileRight">
            <div className="profileRightTop">
                <div className="profileCover">
                <img src="assets/person/3.jpeg" alt="" className="profileCoverImage" />
                <img src="assets/person/7.jpeg" alt="" className="profileUserImage" />
                </div>
                <div className="profileInfo">
                    <h4 className="profileInfoName">safak kogalu</h4>
                    <div className="profileInfoDesc"> happy diwali to all my family members
                     </div>
                </div>
            </div>
            <div className="ProfileRightBottom">
               <Feed/>
               <Rightbar/>
            </div>
       
        </div>
        
        </div> 
    </div>
  )
}
