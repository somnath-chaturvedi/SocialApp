import './rightbar.css'

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="rightbarContainer">
                    <img src="/assets/gift.png" alt="" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Jon Snow</b> and <b>3 others</b> have birthday today.
                    </span>
                </div>
                <img src="assets/ad.jpeg" alt="" className="rightbarAd"/>
            </div>
        </div>
    )
}
