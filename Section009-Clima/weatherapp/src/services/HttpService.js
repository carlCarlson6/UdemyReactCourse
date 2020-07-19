class HttpService {

    async GetAsync(url) {
        const api = await fetch(url);
        const response = await api.json();
        return response;
    }

}

export default HttpService;