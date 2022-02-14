import {
    animateScroll as scroll
} from 'react-scroll';
import {
    ReactComponent as ScrollTopIcon
} from 'assets/icons/icon-scrolltop.svg';
import {
    FaTwitter,
    FaDiscord,
    FaInstagram
} from 'react-icons/fa';
import './Footer.scss';

const Footer = ({
    visible
}) => {
    const handleScrollTop = () => {
        scroll.scrollToTop();
    };

    return ( <
        >
        <
        div className = 'footer' >
        <
        div className = 'container' >
        <
        div className = 'flex justify-between items-center' >
        <
        div className = 'flex items-center' >
        <
        img src = './assets/images/logo.png'
        className = 'max-h-12 w-full'
        alt = 'Logo' /
        >
        <
        /div> <
        /div> <
        div className = 'flex flex-col justify-center' >
        <
        p className = 'text-white mb-4 text-lg md:text-xl xl:text-2xl' >
        FOLLOW US <
        /p> <
        div className = 'flex gap-4 justify-between' >
        <
        a href = 'https://twitter.com'
        className = 'bg-violet-500 p-3 text-xl text-white hover:text-gray-800 transition-all duration-300 ease-in-out rounded-tl-lg rounded-br-lg' >
        <
        FaTwitter / >
        <
        /a> <
        a href = 'https://discord.com'
        className = 'bg-violet-500 p-3 text-xl text-white hover:text-gray-800 transition-all duration-300 ease-in-out rounded-tl-lg rounded-br-lg' >
        <
        FaDiscord / >
        <
        /a> <
        a href = 'https://instagram.com'
        className = 'bg-violet-500 p-3 text-xl text-white hover:text-gray-800 transition-all duration-300 ease-in-out rounded-tl-lg rounded-br-lg' >
        <
        FaInstagram / >
        <
        /a> <
        /div> <
        /div> <
        /div> <
        /div> {
            visible && ( <
                div className = 'scrolltop' >
                <
                span onClick = {
                    handleScrollTop
                } >
                <
                ScrollTopIcon / >
                <
                /span> <
                /div>
            )
        } <
        />
    );
};

export default Footer;