import Accordion from 'components/accordion';

const faqs = [{
        title: 'What is a Meta Maniac NFT?',
        content: `The Meta Maniacs prestigious NFT project offers 10,000 of the most unique, extraordinary digital collectibles that represent the community.`,
    },
    {
        title: 'How do I Mint?',
        content: `You can mint a Meta Maniac NFT on Launch Day. Minting is best done on Meta Mask, however we will provide information on the release date via discord.`,
    },
    {
        title: 'What will I be able to do with my Maniac NFT?',
        content: `With being a holder of a Meta Maniac NFT, you can do various things! You may use your Maniac as a profile picture for Social Media platforms, or you may resell your Meta Maniac for profit! However as stated in the Roadmap, we highly advise all to hold it, as you will be highly incentivized with gifts such as an exclusive 1/1 Meta Mutts NFT gifted for free via FREE MINT. Meta Mutts come with value and utility in exchange for your loyalty. 50% of all royalties earned through post drop sales will be split between all holders every 2 weeks. Those who hold a Meta Maniac and a Meta Mutt will automatically be entitled to these earnings. through post drop sales will be split between all holders every 2 weeks.
`,
    },
    {
        title: 'Are there any Royalty Fees?',
        content: `The royalty fees are set at 10%. A strong portion of these royalties will be put towards marketing, more giveaways for the community, as well as charitable donations. We are committed to longitivtiy, and success.`,
    },
    {
        title: 'Will there be a presale?',
        content: `Yes, there will be a one day presale before the public launch. The presale will include 1350 whitelist members determined via discord. Please, join the Meta Maniacs Discord to learn more about joining the whitelist.`,
    },
];

const FaqSection = () => {
    return ( <
        div className = 'faq-section'
        id = 'faq' >
        <
        div className = 'container' >
        <
        div className = 'max-w-5xl mx-auto flex flex-col items-center' >
        <
        h2 className = 'mb-12 text-white font-bold text-4xl md:text-5xl lg:text-6xl' >
        Frequently Asked Questions <
        /h2> <
        div className = 'flex flex-col' >
        <
        Accordion data = {
            faqs
        }
        /> <
        /div> <
        /div> <
        /div> <
        /div>
    );
};

export default FaqSection;