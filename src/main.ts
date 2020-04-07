import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
<<<<<<< HEAD

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

=======
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
  if (window['ngRef']) {
    window['ngRef'].destroy();
  }
  window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));
>>>>>>> ab07f2bbf30637ae286b3f8d961175724e68a326
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
