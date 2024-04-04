import React from 'react'
import "./share.css"
import {PermMedia,Label,Room,EmojiEmotions} from '@mui/icons-material'
export default function Share() {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="assets/person/1.jpeg" alt="" className="shareProfileImage" />
                <input placeholder='what`s in Your mind pavan' className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia  htmlColor=" tomato"className='shareIcon' />
                        <span className="shareOptionText">Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="red" className='shareIcon' />
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room  htmlColor=" skyblue" className='shareIcon' />
                        <span className="shareOptionText">Location </span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="yellow" className='shareIcon' />
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
