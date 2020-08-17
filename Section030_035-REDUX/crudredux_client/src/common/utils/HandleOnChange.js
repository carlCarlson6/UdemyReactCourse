const handleOnChange = (event, state, stateSetter) => {
    const {name, value} = event.target;

    stateSetter({
        ...state,
        [name]: value
    });
}

export default handleOnChange;