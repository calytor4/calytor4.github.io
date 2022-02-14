const TeamMember = (props) => {
    const {
        image,
        name,
        role
    } = props.data;
    return ( <
        div className = 'max-w-sm flex items-center justify-between h-full flex-col text-center w-full' >
        <
        img className = 'mb-5 rounded-full'
        src = {
            `./assets/images/${image}`
        }
        alt = 'Member' /
        >
        <
        h5 className = 'uppercase mb-5 md:text-lg lg:text-xl text-indigo-300 font-black underline' > {
            name
        } <
        /h5> <
        p className = 'text-sm md:text-base text-white' > {
            role
        } < /p> <
        /div>
    );
};

export default TeamMember;