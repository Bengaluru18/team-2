import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login'
import { BookingPage } from '../pages/booking/booking'
import { GetitemProvider } from '../providers/getitem/getitem';
import { LoginProvider } from '../providers/login/login';
import { CurrentItemProvider } from '../providers/current-item/current-item';
import { BookingProvider } from '../providers/booking/booking';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    BookingPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    BookingPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GetitemProvider,
    LoginProvider,
    CurrentItemProvider,
    BookingProvider
  ]
})
export class AppModule {}
