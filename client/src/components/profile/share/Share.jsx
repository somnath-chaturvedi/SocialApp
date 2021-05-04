import './share.css'
import {PermMedia, Label, Room, EmojiEmotions} from '@material-ui/icons'

export default function Share() {
    return (
        <div className = 'share'>
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg"/>
                    <input type="text" placeholder = "Whats on your mind ?" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            <PermMedia htmlColor = 'green' className = "shareIcon"/>
                            <span className="shareOptionText">Photos</span>
                        </div>
                        <div className="shareOption">
                            <Label htmlColor = 'purple' className = "shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor = 'blue' className = "shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="orange" className = "shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
