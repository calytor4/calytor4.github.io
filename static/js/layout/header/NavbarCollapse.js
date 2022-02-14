import {
    useEffect
} from 'react';
import {
    scroller
} from 'react-scroll';
import {
    useEthers,
    shortenAddress,
    Mainnet,
    Ropsten
} from '@usedapp/core';
import WalletConnectProvider from '@walletconnect/web3-provider';
import Web3Modal from 'web3modal';

const NavItem = (props) => {
    const {
        link,
        text
    } = props.navItem;

    const scrollTarget = (target) => {
        scroller.scrollTo(target, {
            smooth: true,
            duration: 700
        });
    };

    const scrollToPage = async (e, target) => {
        e.preventDefault();
        // if (window.location.pathname !== '/') {
        //   await navigate('/');
        //   setTimeout(() => {
        //     scrollTarget(target);
        //   }, 500);
        // } else {
        scrollTarget(target);
        // }
    };

    return ( <
        li >
        <
        a className = 'nav-link'
        href = {
            `#${link}`
        }
        onClick = {
            (e) => scrollToPage(e, link)
        } >
        {
            text
        } <
        /a> <
        /li>
    );
};

const NavbarCollapse = ({
    isToggle,
    navs
}) => {
    const {
        account,
        activate,
        chainId,
        deactivate
    } = useEthers();

    useEffect(() => {
        deactivate();
    }, []);

    const handleConnect = async () => {
        if (account) {
            deactivate();
            return;
        }

        const providerOptions = {
            injected: {
                display: {
                    name: 'Metamask',
                    description: 'Connect with the provider in your Browser',
                },
                package: null,
            },
            walletconnect: {
                package: WalletConnectProvider,
                options: {
                    infuraId: process.env.REACT_APP_INFURA_ID,
                },
            },
        };

        if (!account) {
            const web3Modal = new Web3Modal({
                providerOptions,
            });
            const provider = await web3Modal.connect();
            await activate(provider);
        }
    };

    return ( <
        div className = {
            `navbar-collapse ${isToggle && 'show'}`
        } >
        <
        ul className = 'navbar-nav' > {
            navs.map((navItem, index) => {
                return <NavItem key = {
                    `nav-link-${index}`
                }
                navItem = {
                    navItem
                }
                />;
            })
        } <
        /ul> <
        /div>
    );
};

export default NavbarCollapse;