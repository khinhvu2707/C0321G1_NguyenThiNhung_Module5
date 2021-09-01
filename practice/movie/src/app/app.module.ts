import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import { CinemaCreateComponent } from './cinema-create/cinema-create.component';
import { CinemaListComponent } from './cinema-list/cinema-list.component';
import { CinemaEditComponent } from './cinema-edit/cinema-edit.component';
import { CinemaDialogComponent } from './cinema-dialog/cinema-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    CinemaCreateComponent,
    CinemaListComponent,
    CinemaEditComponent,
    CinemaDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
