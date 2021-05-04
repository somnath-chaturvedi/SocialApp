import './sidebar.css'
import {Public, Home, Room, RssFeed, Favorite} from '@material-ui/icons'

export default function Sidebar() {
    return (
        <div className= 'sidebars'>
            <div className="sidebarWrapper">
                <div className="sidebarHeading">
                    <Public className ='sidebarIcon'/>
                    <span className="sidebarText">Intro</span>
                </div>
                <div className="sidebarContainer">
                    <div className="sidebarContent">
                        <Home className = 'sidebarContentIcon'/>
                        <span className="sidebarContentText">Lives in <b>Bhopal, Madhya Pradesh</b></span>
                    </div>
                    <div className="sidebarContent">
                        <Room className = 'sidebarContentIcon'/>
                        <span className="sidebarContentText">From <b>Vidisha, Madhya Pradesh</b></span>
                    </div>
                    <div className="sidebarContent">
                        <RssFeed className = 'sidebarContentIcon'/>
                        <span className="sidebarContentText">Followed by <b>2000 people</b></span>
                    </div>
                    <div className="sidebarContent">
                        <Favorite className = 'sidebarContentIcon'/>
                        <span className="sidebarContentText">Single</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
