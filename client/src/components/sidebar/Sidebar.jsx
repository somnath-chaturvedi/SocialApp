import './sidebar.css'
import CloseFriend from '../closeFriend/CloseFriend'
import { Users } from '../../dummyData'
import {RssFeed, Chat, PlayCircleFilled, Group, Bookmark, Help, WorkOffOutlined, Event, School } from '@material-ui/icons'
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <RssFeed className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <Chat className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        < PlayCircleFilled className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <Group className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <Bookmark className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <Help className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <WorkOffOutlined className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <Event className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                </ul>
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <School className = 'sidebarIcon'/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    {Users.map((u) => <CloseFriend key = {u.id} user={u}/>)}
                </ul>
            </div>
        </div>
    )
}
