class HttpService {

    // with fetch
    GetRequest(url){
        console.log('consultando api...');
        const api = fetch(url);
        const response = api.then(respuesta => {return respuesta.json()});
        response.then(result => console.log(result));
    }

    // with async await
    async GetRequestAsync(url){
        const api = await fetch(url);
        const response = await api.json();
        return response;
    }

}

export default HttpService;