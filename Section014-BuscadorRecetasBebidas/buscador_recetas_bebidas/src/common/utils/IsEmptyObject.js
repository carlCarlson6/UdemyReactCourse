const isEmptyObject = (objct) => {
    if(Object.keys(objct).length === 0 ) {
        return true;
    }
    else {
        return false;
    }
}

export default isEmptyObject;