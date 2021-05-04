import './feed.css'
import Share from '../share/Share'
import {MoreHoriz} from '@material-ui/icons'
import { useState, useEffect} from 'react'
import axios from 'axios'
import { format } from 'timeago.js'

export default function Feed({username}) {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            const res = username 
            ? await axios.get("/posts/profile/" + username) 
            : await axios.get("posts/timeline/608af62566db351f60059d40")
            setPosts(res.data)
        }
        fetchPosts()
    }, [username])
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                <div className="post">
                    <div className="postWrapper">
                        <div className="postTop">
                            <div className="postTopLeft">
                                <img src= '' alt="" className="postProfileImg"/>
                                <span className="postUserName">{username}</span>
                                <span className="postDate">5 min ago...</span>
                            </div>
                            <div className="postTopRight">
                                <MoreHoriz className = 'postTopRightIcon'/>
                            </div>
                        </div>
                        <hr className="postHr"/>
                        <div className="postCenter">
                            <span className="postText">description...</span>
                            <img src= {`${PF}post/1.jpeg`} alt="" className="postImg"/>
                        </div>
                        <div className="postBottom">
                            <div className="postBottomLeft">
                                <img src="/assets/like.png" alt="" className="likeIcon"/>
                                <img src="/assets/heart.png" alt="" className="likeIcon"/>
                                <span className="postLikeCounter">{` 31 likes`}</span>
                            </div>
                            <div className="postBottomRight">
                                <span className="postCommentText">{`3 comments    `}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
