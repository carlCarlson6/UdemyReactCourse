import express, {Application, Router} from 'express'
import { IExpressRoute } from '../../core/api/IExpressRouter';
import { IServer } from '../../core/api/IServer';

export class ExpressServer implements IServer {
    private app: Application;

    constructor() {
        this.app = express();
        
    }

    public SetConfig(middlewares: Array<any>, routers: Array<IExpressRoute>) {
        this.app.set('port', process.env.PORT || 4000)
        this.app.disable('etag');
        this.SetMiddlewares(middlewares);
        this.CreateRoutes(routers);
    }

    private SetMiddlewares(middlewares: Array<any>) {
        middlewares.forEach(middleware => this.app.use(middleware));
    }

    private CreateRoutes(routers: Array<IExpressRoute>) {
        routers.forEach(router => this.app.use(router.path, router.router));
    }

    public Start() {
        this.app.listen(this.app.get('port'), '0.0.0.0', () => console.log('the server is running'));
    }

}
