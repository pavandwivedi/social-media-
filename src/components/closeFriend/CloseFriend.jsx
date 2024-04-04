import "./closeFriend.css"

export default function CloseFriend({user}) {
  return (
    <li className="leftbarFriend">
              <img src={user.profilePicture} alt="" className="leftbarFriendImage" />
              <span className="leftbarFriendName">{user.username}</span>
    </li>
  )
}
