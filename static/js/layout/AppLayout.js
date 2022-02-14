import {
    useState,
    useEffect
} from 'react';
import Header from './header';
import Footer from './footer';
import './AppLayout.scss';

const AppLayout = (props) => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        window ? .addEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        let lastScrollTop = 0;
        const currentScrollTop = window ? .pageYOffset;

        if (!visible && currentScrollTop > lastScrollTop) {
            setVisible(true);
        } else if (currentScrollTop === 0) {
            setVisible(false);
        }
        lastScrollTop = currentScrollTop;
    };

    return ( <
        div className = 'app-layout' >
        <
        Header navs = {
            props.navs
        }
        blackBanner = {
            visible
        }
        /> {
            props.children
        } <
        Footer visible = {
            visible
        }
        /> <
        /div>
    );
};

export default AppLayout;