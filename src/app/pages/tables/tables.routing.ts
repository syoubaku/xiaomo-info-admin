import {Routes, RouterModule} from "@angular/router";
import {Tables} from "./tables.component";
import {LinkTables} from "./components/webLinks/linkTables.component";
import {AdminUserTables} from "./components/adminUsers/adminUserTables.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      {path: 'adminUsers', component: AdminUserTables},
      {path: 'webLinks', component: LinkTables}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
