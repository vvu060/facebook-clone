import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import EventIcon from '@material-ui/icons/Event';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from './StateProvider';

function Sidebar() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow Icon={LocalHospitalIcon} title='COVID-19 Information Center' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={SupervisedUserCircleIcon} title='Groups' />
            <SidebarRow Icon={StorefrontIcon} title='Marketplace' />
            <SidebarRow Icon={OndemandVideoIcon} title='Videos' />
            <SidebarRow Icon={EventIcon} title='Events' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='See More' />
        </div>
    )
}

export default Sidebar;
