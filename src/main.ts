import { enableProdMode, ViewEncapsulation } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { App3dThreeTemplateModule } from './app/app3d-three-template.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(App3dThreeTemplateModule, [{
  defaultEncapsulation: ViewEncapsulation.None
}]).catch(err => console.log(err));
