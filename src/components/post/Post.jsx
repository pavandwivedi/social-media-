import "./post.css";
import {MoreVert} from "@mui/icons-material"
import {Users} from "../../dummyData"
import { useState } from "react";

export default function Post({post}) {
  const [like,setLike] = useState(post.like);
  const[isLiked,setISLiked] = useState(false)
  const likeHandler =()=>{
    setLike(isLiked ? like-1 : like+1)
    setISLiked(!isLiked)
  }
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
            <div className="postTopLeft">
                <img src={Users.filter((u) =>u.id===post?.userId)[0].profilePicture} alt="" className="postProfileImage" />
                <span className="postUsername">{Users.filter((u) =>u.id===post?.userId)[0].username}</span>
                <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopright">
                <MoreVert/>
            </div>
        </div>
        <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img src={post.photo} alt="" className="postCenterImage" />
        </div>
        <div className="postBottom">
            <div className="postBottomLeft">
                <img src="assets/like.png" onClick ={likeHandler} alt="" className="likeIcon" />
                <img src="assets/heart.png"  onClick ={likeHandler} alt="" className="likeIcon" />
                <span className="postLikeCounter">{like} people liked it</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText"> {post.comment} comments</span>
            </div>
        </div>
      </div>
    </div>
  );
}
