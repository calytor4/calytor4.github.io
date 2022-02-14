const UtilityItem = (props) => {
    const {
        image,
        title,
        description
    } = props.data;
    return ( <
        div className = 'max-w-sm flex items-center justify-between h-full flex-col text-center w-full sm:w-1/2 lg:w-1/3' >
        <
        img className = 'mb-5 max-w-[128px]'
        src = {
            `./assets/images/${image}`
        }
        alt = 'Utility' /
        >
        <
        h5 className = 'uppercase mb-5 text-lg md:text-2xl text-indigo-300' > {
            title
        } <
        /h5> <
        p className = 'text-sm md:text-base text-white' > {
            description
        } < /p> <
        /div>
    );
};

export default UtilityItem;