import GastoModel from "../common/models/GastoModel";
import shortid from 'shortid';

class FormularioGastoSubmitter {
    constructor(errorSetter, gastoSetter, gastos, gastosSetter, gastoStateHandler){
        this.errorSetter = errorSetter;
        this.gastoSetter = gastoSetter;
        this.gastos = gastos;
        this.gastosSetter = gastosSetter;
        this.gastoStateHandler = gastoStateHandler;
    }

    Submit(event, gasto){
        event.preventDefault();
        console.log('submitting', gasto);

        let submitValidation = this.Validation(gasto);
        this.errorSetter(!submitValidation);
        if(!submitValidation) {return;}

        gasto.id = shortid();

        this.gastosSetter([...this.gastos, gasto]);
        this.gastoSetter(new GastoModel('', 0));
    }

    Validation(gasto){
        console.log('validating');
        let validation = true; 
        
        if(gasto.amount < 1 || isNaN(gasto.amount)) {validation = validation*false;}
        if(gasto.concept.trim() === '') {validation = validation*false;}
        
        return validation;
    }

}

export default FormularioGastoSubmitter;