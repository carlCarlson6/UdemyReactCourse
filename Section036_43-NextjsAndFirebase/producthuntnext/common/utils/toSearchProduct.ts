import { FormEvent } from "react";
import Router from "next/router";

export const toSearchProduct = (event: FormEvent<HTMLFormElement>, searchTerm: string): Promise<void> => {
    event.preventDefault();
    if(searchTerm.trim()==='') return;

    Router.push({
        pathname:'/buscar',
        query: {'q': searchTerm}
    })
}