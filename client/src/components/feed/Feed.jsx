import './feed.css'
import { useState, useEffect} from 'react'
import Share from '../share/Share'
import Post from '../post/Post'
import axios from 'axios'

export default function Feed() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const fetchPosts = async() => {
            const res = await axios.get("posts/timeline/608af62566db351f60059d40")
            setPosts(res.data)
        }
        fetchPosts()
    }, [])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => {
                   return <Post key = {p._id} post = {p}/>
                })}
            </div>
        </div>
    )
}
