class PageService {
    constructor(setActualPage) {
        this.setActualPage = setActualPage;
    }

    NextPage(actualPage, totalPages) {
        const newActualPage = actualPage + 1;
        if(newActualPage > totalPages) {return;}
        this.setActualPage(newActualPage)
    }

    PreviousPage(actualPage) {
        const newActualPage = actualPage - 1;
        if(newActualPage === 0) {return;}
        this.setActualPage(newActualPage)
    }
}

export default PageService;