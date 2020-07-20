class NewsServiceResponse {
    constructor(statusCode, statusText, articles, message = ''){
        this.statusCode = statusCode; 
        this.statusText = statusText; 
        this.message = message; 
        this.articles = articles;
    }
}
