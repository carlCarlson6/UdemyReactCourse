import { Router } from "express";

export interface IExpressRoute {
    path: string;
    router: Router;

    ConstructRoutes(): void
}