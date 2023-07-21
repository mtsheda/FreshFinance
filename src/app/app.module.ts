import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopPartComponent } from './top-part/top-part.component';
import { BottomPartComponent } from './bottom-part/bottom-part.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FreshFinanceComponent } from './fresh-finance/fresh-finance.component';
import { LinksComponent } from './links/links.component';
import { LoginComponent } from './login/login.component';
import { BigTextComponent } from './big-text/big-text.component';
import { AboutBussinessComponent } from './about-bussiness/about-bussiness.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { AdviceComponent } from './advice/advice.component';
import { IconsComponent } from './icons/icons.component';
import { PutClientFirstComponent } from './put-client-first/put-client-first.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BottmButtonsComponent } from './bottm-buttons/bottm-buttons.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    TopPartComponent,
    BottomPartComponent,
    ToolbarComponent,
    FreshFinanceComponent,
    LinksComponent,
    LoginComponent,
    BigTextComponent,
    AboutBussinessComponent,
    ButtonsComponent,
    AdviceComponent,
    IconsComponent,
    PutClientFirstComponent,
    BottmButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
