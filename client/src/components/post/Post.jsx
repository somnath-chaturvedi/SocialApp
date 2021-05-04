import {useState} from 'react'
import './post.css'
import {MoreHoriz} from '@material-ui/icons'
import { useEffect } from 'react'
import axios from 'axios'
import {format} from 'timeago.js'
import { Link } from 'react-router-dom'

export default function Post({post}) {
    const [like,setLike] = useState(post.likes.length)
    const [isLiked, setIsLiked] = useState(false)
    const [user, setUser] = useState({})
    const PF = process.env.REACT_APP_PUBLIC_FOLDER

    useEffect(() => {
        const fetchUser = async() => {
            const res = await axios.get(`/users/${post.userId}`)
            setUser(res.data)
        }
        fetchUser()
    }, [post.userId])

    const likeHandler = () => {
        setLike(isLiked ? like-1:like+1)
        setIsLiked(!isLiked)
    }

    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <Link to = {`profile/${user.username}`}>
                        <img src={user.profilePicture || PF+"default.png"} alt="" className="postProfileImg"/>
                        </Link>
                       
                        <span className="postUserName">{user.username}</span>
                        <span className="postDate">{format(post.createdAt)}...</span>
                    </div>
                    <div className="postTopRight">
                        <MoreHoriz className = 'postTopRightIcon'/>
                    </div>
                </div>
                <hr className="postHr"/>
                <div className="postCenter">
                    <span className="postText">{post?.desc}</span>
                    <img src= {PF+post.img} alt="" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <img src="/assets/like.png" alt="" className="likeIcon" onClick = {likeHandler}/>
                        <img src="/assets/heart.png" alt="" className="likeIcon" onClick = {likeHandler}/>
                        <span className="postLikeCounter">{`${like} likes`}</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">{` comments    `}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
