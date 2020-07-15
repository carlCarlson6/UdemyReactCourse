class PresupuestoStateHandler {
    constructor(presupuesto, presupuestoSetter) {
        this.presupuesto = presupuesto;
        this.presupuestoSetter = presupuestoSetter;
    }

    AcutalizarPresupuesto(gastos){
        if(gastos.length===0) {return;}
        let totalGastos = gastos.reduce((total, gasto) => {return total+gasto.amount}, 0);
        let restanteActual = this.presupuesto.total - totalGastos;
        this.presupuestoSetter({...this.presupuesto, ['restante']: restanteActual});
    }
}

export default PresupuestoStateHandler;
