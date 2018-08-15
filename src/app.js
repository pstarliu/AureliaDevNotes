import { PLATFORM } from "aurelia-framework"
export class App {
    configureRouter(config, router){
        config.title = 'Aurelia Notes';
        config.map([
            { route: '', moduleId: PLATFORM.moduleName('welcome') }
        ]);

        this.router = router;
    }
}
