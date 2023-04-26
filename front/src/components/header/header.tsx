import './header.scss';
import { Link, useLocation } from 'react-router-dom';
export default function Header() {
    const location = useLocation();
    let isMainPage = location.pathname === '/';

    return (
        <div className='header'>
            <div className={`header-content ${isMainPage ? 'big-header' : 'small-header'}`}>
                <Link to='/'>
                    <img src='/images/udv-logo.png' alt='logo' className='header__logo'></img>
                </Link>
                <div className="header__input">
                    <input placeholder='Найти' className='input'></input>
                    <img src='/images/Union.png' width="18px" height="18px" alt='search'></img>
                </div>
                <div className='header-user'>
                    <img src='/images/user.png' alt='user'></img>
                </div>
            </div>
        </div>
    )
}