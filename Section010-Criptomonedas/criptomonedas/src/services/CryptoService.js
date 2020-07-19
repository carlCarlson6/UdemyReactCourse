import {cryptoCurrencyListUrl, cryptoCurrencyQuotationUrl} from '../settings';
import HttpService from './HttpService';
import CryptoCurrency from '../common/models/Cryptocurrency';

class CryptoService {
    constructor() {
        this.http = new HttpService();
    }

    async GetCrytoCurrencies() {
        let response = await (await this.http.GetResponse(cryptoCurrencyListUrl)).data.Data;
        console.log('get crypto currencies response: ', response);
        
        let cryptoCurrencies = [];
        response.forEach(currencyData => {
            let name = currencyData.CoinInfo.Name;
            let fullName = currencyData.CoinInfo.FullName;
            let internal = currencyData.CoinInfo.Internal;
            let id = currencyData.CoinInfo.Id;
            cryptoCurrencies.push(new CryptoCurrency(name, fullName, internal, id))
        });

        return cryptoCurrencies;        
    }

    async GetCrytoCurrencyQuotation(request) {
        let url = `${cryptoCurrencyQuotationUrl}fsyms=${request.crypto}&fsyms=${request.currency}`;
        let response = await this.http.GetResponse(url);
        console.log('get crypto currency quotation response: ', response)
    }
}

export default CryptoService;