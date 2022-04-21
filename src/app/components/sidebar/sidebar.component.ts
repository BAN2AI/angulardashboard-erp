import { Component, OnInit } from "@angular/core";

declare interface RouteInfo {
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    class: ""
  },
  {
    path: "/dashboard/produits",
    title: "Produits",
    rtlTitle: "لوحة القيادة",
    icon: "icon-cart",
    class: ""
  },
  {
    path: "/pos",
    title: "POS",
    rtlTitle: "لوحة القيادة",
    icon: "icon-laptop",
    class: ""
  },
  {
    path: "/dashboard/io",
    title: "Entree/  Sorties",
    rtlTitle: "لوحة القيادة",
    icon: "icon-coins",
    class: ""
  },
  {
    path: "/dashboard/users",
    title: "Utilisateurs",
    rtlTitle: "لوحة القيادة",
    icon: "icon-single-02",
    class: ""
  },
  {
    path: "/dashboard/compta",
    title: "Comptabilites",
    rtlTitle: "لوحة القيادة",
    icon: "icon-paper",
    class: ""
  },
  // {
  //   path: "/dashboard/finances",
  //   title: "Finances",
  //   rtlTitle: "لوحة القيادة",
  //   icon: "icon-money-coins",
  //   class: ""
  // },
  // {
  //   path: "/dashboard/icons",
  //   title: "Icons",
  //   rtlTitle: "الرموز",
  //   icon: "icon-atom",
  //   class: ""
  // },
  // {
  //   path: "/dashboard/maps",
  //   title: "Maps",
  //   rtlTitle: "خرائط",
  //   icon: "icon-pin",
  //   class: "" },
  // {
  //   path: "/dashboard/notifications",
  //   title: "Notifications",
  //   rtlTitle: "إخطارات",
  //   icon: "icon-bell-55",
  //   class: ""
  // },

  // {
  //   path: "/dashboard/user",
  //   title: "User Profile",
  //   rtlTitle: "ملف تعريفي للمستخدم",
  //   icon: "icon-single-02",
  //   class: ""
  // },
  // {
  //   path: "/dashboard/tables",
  //   title: "Table List",
  //   rtlTitle: "قائمة الجدول",
  //   icon: "icon-puzzle-10",
  //   class: ""
  // },
  // {
  //   path: "/dashboard/typography",
  //   title: "Typography",
  //   rtlTitle: "طباعة",
  //   icon: "icon-align-center",
  //   class: ""
  // },
  // {
  //   path: "/dashboard/rtl",
  //   title: "RTL Support",
  //   rtlTitle: "ار تي ال",
  //   icon: "icon-world",
  //   class: ""
  // }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
