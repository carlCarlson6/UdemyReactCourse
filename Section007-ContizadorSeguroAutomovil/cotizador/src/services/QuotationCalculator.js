import {baseQuotation, quotationLabel, quotationPlan, quotationYear } from "../common/data/Quotations";
import DateUtils from "../common/utils/DateUtils";

class QuotationCalculator {

    calc(formData){
        let resultado = baseQuotation;

        resultado = this.applyYearPolicy(parseInt(formData.year), resultado);
        resultado = this.applyLabelPolicy(formData.marca, resultado);
        resultado = this.applyPlanPolicy(formData.plan, resultado);

        return parseFloat(resultado).toFixed(2);
    }

    applyYearPolicy(year, amount) {
        let yearDiference = new DateUtils().calculateYearDiference(year);
        let result = amount*(1-yearDiference*quotationYear);
        return result;
    }

    applyLabelPolicy(label, amount) {
        let resultado = amount*quotationLabel[label];
        return resultado;
    }

    applyPlanPolicy(plan, amount) {
        let resultado = amount*quotationPlan[plan];
        return resultado;
    }
}

export default QuotationCalculator;