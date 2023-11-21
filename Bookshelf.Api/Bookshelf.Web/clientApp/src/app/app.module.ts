import { AppComponent } from './components/app/app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ManagebookComponent } from './components/managebook/managebook.component';
import { LoginComponent } from './components/login/login.component';
import { SavedbookComponent } from './components/savedbook/savedbook.component';
import { BooksComponent } from './components/books/books.component';
import { GenresComponent } from './components/genres/genres.component';
import { HomecontentComponent } from './components/homecontent/homecontent.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { ElementRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonHelper } from './helpers/common.helper';
import { ConstantHelper } from './helpers/constant.helper';
import { RepositoryService } from './services/repository.service';
import { SessionService } from './services/session.service';
import { CanActivateGuard } from './guards/canactivate.guard.service';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';
import { POPUP_CONTAINER, PopupModule } from '@progress/kendo-angular-popup';
import { ToastComponent } from './components/toast/toast.component';
import { SearchinputComponent } from './components/searchinput/searchinput.component';
import { ToastService } from './services/toast.service';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ManagebookComponent,
    LoginComponent,
    SavedbookComponent,
    BooksComponent,
    GenresComponent,
    HomecontentComponent,
    BookdetailComponent,
    ToastComponent,
    SearchinputComponent
  ],
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    DropDownsModule,
    LabelModule,
    InputsModule,
    ButtonsModule,
    GridModule,
    PopupModule,
    RouterOutlet,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'welcome', component: HomecontentComponent},
      { path: 'books', component: BooksComponent },
      {
        path: 'bookdetail',
        children: [
          {
            path: ':id',
            component: BookdetailComponent,
            canActivate: [CanActivateGuard]
          },
          {
            path: '',
            component: BookdetailComponent,
            canActivate: [CanActivateGuard]
          }
        ]
      },
      { path: 'genres', component: GenresComponent },
      {
        path: 'managebook',
        component: ManagebookComponent,
        canActivate: [CanActivateGuard]
      },
      { path: 'savedbook', component: SavedbookComponent },
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [CanActivateGuard]
      },
      { path: '**', redirectTo: '' }
    ])
  ],
  providers: [
    CommonHelper,
    ConstantHelper,
    RepositoryService,
    SessionService,
    CommonService,
    CanActivateGuard,
    ToastService,
    {
      provide: POPUP_CONTAINER,
      useFactory: () => {
        // return the container ElementRef, where the popup will be injected
        return { nativeElement: document.getElementById("toast-popup-container") } as ElementRef;
      }
    },
  ],

})
export class AppModule { }
