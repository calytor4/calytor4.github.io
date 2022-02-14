import RoadmapItem from 'pages/common/RoadmapItem';

const roadmap = [{
        image: 'roadmap_step_1.png',
        title: 'Pre-Sale',
        description: 'We are the Maniacs, the most extraordinary in the Metaverse. Join our discord group, get whitelisted for our presales, as well as receive the latest information, giveaways, and more. 10,000 Maniacs are waiting to be unleashed!',
    },
    {
        image: 'roadmap_step_2.png',
        title: 'Q2 2022',
        description: 'We are the Maniacs, the most extraordinary in the Metaverse. Join our discord group, get whitelisted for our presales, as well as receive the latest information, giveaways, and more. 10,000 Maniacs are waiting to be unleashed!',
    },
    {
        image: 'roadmap_step_4.png',
        title: 'Q3 2022',
        description: 'We are the Maniacs, the most extraordinary in the Metaverse. Join our discord group, get whitelisted for our presales, as well as receive the latest information, giveaways, and more. 10,000 Maniacs are waiting to be unleashed!',
    },
    {
        image: 'roadmap_step_6.png',
        title: 'Q4 2022',
        description: 'We are the Maniacs, the most extraordinary in the Metaverse. Join our discord group, get whitelisted for our presales, as well as receive the latest information, giveaways, and more. 10,000 Maniacs are waiting to be unleashed!',
    },
    // {
    //   image: 'roadmap_step_5.png',
    //   title: 'Maniacs In Unison….TOGETHER AS ONE!',
    //   description:
    //     'We are the Maniacs, the most extraordinary in the Metaverse. Join our discord group, get whitelisted for our presales, as well as receive the latest information, giveaways, and more. 10,000 Maniacs are waiting to be unleashed!',
    // },
    // {
    //   image: 'roadmap_step_6.png',
    //   title: 'Maniacs In Unison….TOGETHER AS ONE!',
    //   description:
    //     'We are the Maniacs, the most extraordinary in the Metaverse. Join our discord group, get whitelisted for our presales, as well as receive the latest information, giveaways, and more. 10,000 Maniacs are waiting to be unleashed!',
    // },
];

const RoadmapSection = () => {
    return ( <
        div className = 'roadmap-section'
        id = 'roadmap' >
        <
        div className = 'container' >
        <
        div className = 'max-w-5xl mx-auto flex flex-col items-center' >
        <
        h2 className = 'mb-12 text-white font-bold text-4xl md:text-5xl lg:text-6xl' >
        Launch Roadmap <
        /h2> <
        div className = '' > {
            roadmap.map((item, index) => {
                return <RoadmapItem key = {
                    `roadmap_step_${index}`
                }
                data = {
                    item
                }
                />;
            })
        } <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default RoadmapSection;