import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSidenavModule} from '@angular/material/sidenav';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { UsersModule } from './users/users.module';
import {  RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import {MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY} from '@angular/material/snack-bar';
import { SearchfilterPipe } from './users/searchfilter.pipe';





@NgModule({
    declarations: [
        AppComponent,
        
     
        
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        MatSidenavModule,
        RouterModule,
        BrowserAnimationsModule,
        LayoutModule,
        UsersModule,
        AppRoutingModule,
        MatSnackBarModule,
        
        
       
        
    ],
    

    
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
