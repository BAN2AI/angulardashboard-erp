import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { MapComponent } from "../../pages/map/map.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { IoComponent } from 'src/app/pages/io/io.component';
import { ComptaComponent } from 'src/app/pages/compta/compta.component';
import { UsersComponent } from 'src/app/pages/users/users.component';
import { FinancesComponent } from 'src/app/pages/finances/finances.component';
import { ProduitsComponent } from 'src/app/pages/produits/produits.component';
import { PosComponent } from "src/app/pages/pos/pos.component";
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "icons", component: IconsComponent },
  { path: "maps", component: MapComponent },
  { path: "notifications", component: NotificationsComponent },
  { path: "user", component: UserComponent },
  { path: "tables", component: TablesComponent },
  { path: "typography", component: TypographyComponent },
  { path: "io", component: IoComponent },
  { path: "compta", component: ComptaComponent },
  { path: "users", component: UsersComponent },
  { path: "finances", component: FinancesComponent },
  { path: "produits", component: ProduitsComponent },

  // { path: "rtl", component: RtlComponent }
];
