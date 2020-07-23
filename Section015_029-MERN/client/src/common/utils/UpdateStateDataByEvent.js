const updateStateDataByEvent = (data, setState, event) => {
    let name = event.target.name;
    let value = event.target.value;

    setState({...data, [name]: value})
}

export default updateStateDataByEvent;