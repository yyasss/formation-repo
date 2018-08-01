import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { CoreModule } from './core/core.module';
import { LoginModule } from './login/login.module';
import { PageNotFoundModule } from './page-not-found/page-not-found.module';
import { SharedModule } from './shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// the second parameter 'fr' is optional
registerLocaleData(localeFr, 'fr');

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { Router } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CoreModule,
    SharedModule,
    LoginModule,
    PageNotFoundModule,
    NgbModule.forRoot()     // pour mettre le pipe Date en francais
  ],
  providers: [{provide: LOCALE_ID, useValue: 'fr'}], // pour mettre le pipe Date en francais
  bootstrap: [AppComponent]
})
export class AppModule {

    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
      console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
}

}
