import {
    useNavigate
} from 'react-router-dom';
import AppLayout from 'layout/AppLayout';
import {
    BannerSection,
    UtilitySection,
    RoadmapSection,
    TeamSection,
    FaqSection,
} from './section';
import './HomePage.scss';

const navs = [{
        link: 'utility',
        text: 'Utilities',
    },
    {
        link: 'roadmap',
        text: 'Roadmap',
    },
    {
        link: 'team',
        text: 'Team',
    },
    {
        link: 'faq',
        text: 'FAQ',
    },
];

const HomePage = () => {
    const navigate = useNavigate();

    return ( <
        AppLayout navs = {
            navs
        } >
        <
        BannerSection / >
        <
        UtilitySection / >
        <
        RoadmapSection / >
        <
        TeamSection / >
        <
        FaqSection / >
        <
        /AppLayout>
    );
};

export default HomePage;