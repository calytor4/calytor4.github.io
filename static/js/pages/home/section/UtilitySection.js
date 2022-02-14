import UtilityItem from 'pages/common/UtilityItem';

const utilities = [{
        image: 'utility.png',
        title: 'Play 2 Earn',
        description: `We will be developing a video game based on on our NFT that will reward you $KUMA tokens once you complete certain tasks and win battles.`,
    },
    {
        image: 'utility.png',
        title: 'NFT Staking',
        description: `Holders will able to stake their NFT to receive $KUMA which can be used to breed your NFT, buy our products, or simply sell on the marketplace.`,
    },
    {
        image: 'utility.png',
        title: 'Metaverse Parties & Private Events',
        description: `Holders will be able to join us in our Sandbox Mansion for Metaverse parties. We will also be hosting private events with A-List Celebrities in LA, Miami, and Dubai.`,
    },
    {
        image: 'utility.png',
        title: 'Merch',
        description: `Owning a MetaKuma gives you exclusive access to merch drops and giveaways.`,
    },
    {
        image: 'utility.png',
        title: 'Governance',
        description: `Being a part of our community means you get a voice in all future decisions and events in order to ensure we all get the best return.`,
    },
    {
        image: 'utility.png',
        title: 'Charity',
        description: `Inclusivity and Charity is something we, as a team, are extremely passionate about. Upon the sell out of our collection, we will be donating a portion of the profits to Kids Cancer Society and another portion to the top voted organization by our DAO.`,
    },
];

const UtilitySection = () => {
    return ( <
        div className = 'utility-section'
        id = 'utility' >
        <
        div className = 'container' >
        <
        div className = 'flex flex-col items-center' >
        <
        h2 className = 'mb-12 text-white font-bold text-4xl md:text-5xl lg:text-6xl' >
        NFT Utilities <
        /h2> <
        div className = 'flex flex-wrap justify-center items-start gap-x-6 md:gap-x-8 gap-y-12' > {
            utilities.map((utility, index) => {
                return <UtilityItem key = {
                    `utility_${index}`
                }
                data = {
                    utility
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

export default UtilitySection;