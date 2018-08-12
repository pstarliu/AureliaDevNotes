export class App {
    configureRouter(config, router){
        config.title = 'Aurelia Notes';
        config.map([
            { router: '', moduleId: 'welcome' }
        ]);

        this.router = router;
    }
}