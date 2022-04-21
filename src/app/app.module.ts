import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { FinancesComponent } from './pages/finances/finances.component';
import { ComptaComponent } from './pages/compta/compta.component';
import { ProduitsComponent } from './pages/produits/produits.component';
import { IoComponent } from './pages/io/io.component';
import { UsersComponent } from './pages/users/users.component';
import { PosComponent } from './pages/pos/pos.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, FinancesComponent, ComptaComponent, ProduitsComponent, IoComponent, UsersComponent, PosComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
