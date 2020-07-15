class PresupuestoSubmitter {
    constructor(preguntaErrorSetter, presupuestoSetter, showPreguntaPresupuestoSetter){
        this.preguntaErrorSetter = preguntaErrorSetter;
        this.presupuestoSetter = presupuestoSetter;
        this.showPreguntaPresupuestoSetter = showPreguntaPresupuestoSetter
    }

    Submit(event, presupuesto){
        event.preventDefault();
        console.log('submitting', presupuesto);

        let submitValidation = this.Validation(presupuesto);
        this.preguntaErrorSetter(!submitValidation);
        if(!submitValidation) {return;}

        this.presupuestoSetter(presupuesto);
        this.showPreguntaPresupuestoSetter(false);
    }

    Validation(presupuesto){
        console.log('validating');
        let validation = presupuesto.total < 1 || isNaN(presupuesto.total) ? false: true;
        console.log('validation -', validation);
        return validation;
    }

}

export default PresupuestoSubmitter;