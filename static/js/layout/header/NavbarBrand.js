import {
    ReactComponent as NavbarToggleIcon
} from 'assets/icons/icon-navbar-toggle.svg';

const NavbarBrand = ({
    setIsToggle
}) => {
    return ( <
        >
        <
        a className = 'navbar-brand'
        href = '/' >
        <
        img src = './assets/images/logo.png'
        alt = 'Logo' / >
        <
        /a> <
        button className = 'navbar-toggle'
        type = 'button'
        onClick = {
            setIsToggle
        } >
        <
        i className = 'toggle-icon' >
        <
        NavbarToggleIcon / >
        <
        /i> <
        /button> <
        />
    );
};

export default NavbarBrand;