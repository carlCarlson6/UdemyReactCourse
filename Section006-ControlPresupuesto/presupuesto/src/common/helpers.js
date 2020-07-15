export const revisarPresupuesto = (total, restante) => {
    let clase;
    
    if((total/4) > restante){
        clase = 'alert alert-danger';
    } 
    else if ((total/2) > restante) {
        clase = 'alert alert-warning';
    }
    else {
        clase = 'alert alert-success';
    }

    return clase;

}