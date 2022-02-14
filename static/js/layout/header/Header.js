import {
    useState,
    useEffect
} from 'react';
import NavbarBrand from './NavbarBrand';
import NavbarCollapse from './NavbarCollapse';
import useToggle from 'hooks/useToggle';
import './Header.scss';

const Header = ({
    blackBanner,
    navs
}) => {
    const [isToggle, setIsToggle] = useToggle();

    return ( <
        div className = {!blackBanner ? 'header' : 'header black-overlay'
        } >
        <
        nav className = 'navbar' >
        <
        div className = 'container' >
        <
        NavbarBrand setIsToggle = {
            setIsToggle
        }
        /> <
        NavbarCollapse isToggle = {
            isToggle
        }
        navs = {
            navs
        }
        /> <
        /div> <
        /nav> <
        /div>
    );
};

export default Header;