function getInitialValues() {
    const marcas = ['americano', 'europeo', 'asiatico'];
    const años = [2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012];
    const planes = ['basico', 'completo'];
    return { marcas, años, planes };
}

export default getInitialValues;
