import TeamMember from 'pages/common/TeamMember';

const members = [{
        image: 'avatar1.jpg',
        name: 'Maniac Johnnyboyfire',
        role: 'FOUNDER | PROJECT MANAGER',
    },
    {
        image: 'avatar2.jpg',
        name: 'Maniac Mac',
        role: 'FOUNDER | MARKETING SPECIALIST',
    },
    {
        image: 'avatar3.jpg',
        name: 'Maniac Menace',
        role: 'FOUNDER | DEVELOPMENT MANAGER',
    },
    {
        image: 'avatar4.jpg',
        name: 'Maniac Juju',
        role: 'FOUNDER | PUBLIC RELATIONS & WEBDESIGNER',
    },
];

const TeamSection = () => {
    return ( <
        div className = 'team-section'
        id = 'team' >
        <
        div className = 'container' >
        <
        div className = 'mx-auto flex flex-col items-center' >
        <
        h2 className = 'mb-12 text-white font-bold text-4xl md:text-5xl lg:text-6xl' >
        Meet Teams <
        /h2> <
        div className = 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-8 gap-y-12' > {
            members.map((member, index) => {
                return <TeamMember key = {
                    `member_${index}`
                }
                data = {
                    member
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

export default TeamSection;