import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

/**  Modules */
import { ProjectsModule } from './projects';
import { MaterialModule } from './material';
import { MdSidenavModule } from '@angular/material';

import { Auth } from './core/auth.service';

/** Operators */
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,

    /** Modules */
    ProjectsModule,
    MaterialModule,
    MdSidenavModule
  ],
  providers: [ Auth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
