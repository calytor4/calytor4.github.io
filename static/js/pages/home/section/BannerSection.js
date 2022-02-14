import {
    useNavigate
} from 'react-router-dom';
import Button from 'components/button';

const BannerSection = () => {
    const navigate = useNavigate();

    return ( <
        div className = 'banner-section' >
        <
        div className = 'content' >
        <
        div className = 'banner' >
        <
        img src = './assets/images/join-club-text.png'
        alt = 'Join our club' / >
        <
        p >
        MetaKuma is an exclusive collection of 9999 uniquely designed and hand drawn NFTs(Non - Fungible Tokens).They are made up of over 200 traits revolving around teddy bears that have escaped our world and entered the Metaverse. <
        /p> <
        div className = 'btn-actions' >
        <
        Button className = 'btn-primary'
        handleClick = {
            () => {
                navigate('mint');
            }
        }
        title = 'Mint Live' /
        >
        <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default BannerSection;