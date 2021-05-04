import './profile.css'
import Topbar from '../../components/topbar/Topbar'
import Sidebar from '../../components/profile/sidebar/Sidebar'
import Feed from '../../components/profile/feed/Feed'


export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <>
            <Topbar/>
            <div className="profile">
                <div className="profileEmpty"></div>
                <div className="profileCenter">
                    <div className="profileImg">
                        <img src = {`${PF}post/1.jpeg`} alt="" className="profileCover"/>
                        <img src={`${PF}person/1.jpeg`} alt="" className="profilePicture"/>
                    </div>
                    <div className="profileText">
                        <span className="profileName">Joe Jane</span>
                        <span className="profileDesc">Hello World!!</span>
                    </div>
                    <hr className="profileHr"/>
                    <div className="profileWrapper">
                        <Sidebar className = 'profileSidebar'/>
                        <Feed username="john" className = 'profileFeed'/>
                    </div>
                </div>
                <div className="profileEmpty"></div>
            </div>
        </>
    )
}
