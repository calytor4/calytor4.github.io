const RoadmapItem = (props) => {
    const {
        image,
        title,
        description
    } = props.data;

    return ( <
        div className = 'flex items-center mb-8 justify-center flex-col md:flex-row gap-8 md:gap-12' >
        <
        div className = 'flex justify-center items-center w-32' >
        <
        img src = {
            `./assets/images/${image}`
        }
        alt = 'Roadmap' / >
        <
        /div> <
        div className = 'flex flex-col text-center md:text-left' >
        <
        h5 className = 'mb-4 text-indigo-300 text-lg md:text-xl lg:text-2xl' > {
            title
        } <
        /h5> <
        p className = 'text-white text-sm md:text-base lg:text-lg' > {
            description
        } <
        /p> <
        /div> <
        /div>
    );
};

export default RoadmapItem;