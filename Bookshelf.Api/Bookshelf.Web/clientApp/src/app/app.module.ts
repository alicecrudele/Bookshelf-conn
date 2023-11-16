import { AppComponent } from './components/app/app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ManagebookComponent } from './components/managebook/managebook.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { SavedbookComponent } from './components/savedbook/savedbook.component';
import { BooksComponent } from './components/books/books.component';
import { GenresComponent } from './components/genres/genres.component';
import { HomecontentComponent } from './components/homecontent/homecontent.component';
import { BookdetailComponent } from './components/bookdetail/bookdetail.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonHelper } from './helpers/common.helper';
import { ConstantHelper } from './helpers/constant.helper';
import { RepositoryService } from './services/repository.service';
import { SessionService } from './services/session.service';
import { CanActivateGuard } from './guards/canactivate.guard.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from './services/common.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridModule } from '@progress/kendo-angular-grid';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ManagebookComponent,
    LoginComponent,
    CartComponent,
    SavedbookComponent,
    BooksComponent,
    GenresComponent,
    HomecontentComponent,
    BookdetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    RouterOutlet,
    RouterModule.forRoot([
      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'welcome', component: HomecontentComponent},
      { path: 'books', component: BooksComponent },
      { path: 'bookdetail', component: BookdetailComponent },
      { path: 'genres', component: GenresComponent },
      { path: 'managebook', component: ManagebookComponent },
      { path: 'cart', component: CartComponent },
      { path: 'savedbook', component: SavedbookComponent },
      {
        path: 'login',
        //aggiungere le guards
        component: LoginComponent
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
  ],

})
export class AppModule { }
