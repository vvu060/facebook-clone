import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import { Avatar, IconButton} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { useStateValue } from './StateProvider';


function Header() {

    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='header'>

            <div className='header__left'>
                <img  src="https://scontent-cdg2-1.xx.fbcdn.net/v/t1.0-1/p148x148/90269026_2892612417451931_8278745618491375616_o.png?_nc_cat=107&_nc_sid=1eb0c7&_nc_ohc=rDBuSlvacH8AX_5L6Da&_nc_ht=scontent-cdg2-1.xx&oh=9a7dac129515fe6bf35612a4e94beca8&oe=5FB4E2B7" alt='' />
            </div>
            
            <div className='header__input'>
                <SearchIcon />
                <input type='text' placeholder='Search Facebook' />
            </div >
            
            <div className='header__middle'>
                <div className='header__option header__option--active'>
                    <HomeIcon font-size='large' />
                </div>
                <div className='header__option'>
                    <OndemandVideoIcon font-size='large' />
                </div>
                <div className='header__option'>
                    <StorefrontIcon font-size='large' />
                </div>
                <div className='header__option'>
                    <SupervisedUserCircleIcon font-size='large' />
                </div>
                <div className='header__option'>
                    <SportsEsportsIcon font-size='large' />
                </div>
            </div>
                        
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>
                    <IconButton>
                        <AddIcon/>
                    </IconButton>
                    <IconButton>
                        <ForumIcon/>
                    </IconButton>
                    <IconButton>
                        <NotificationsActiveIcon/>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDownIcon/>
                    </IconButton>
                    
                
            </div>
            
            
        </div>
    )
}

export default Header;
