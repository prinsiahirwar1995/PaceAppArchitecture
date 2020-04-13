import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

<<<<<<< HEAD
=======
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
>>>>>>> 74511f29ab5a63d609316348f7846a238303ab0d
if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
