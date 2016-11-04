import {Routes, RouterModule} from "@angular/router";
import {Tables} from "./tables.component";
import {LinkTables} from "./components/webLinks/linkTables.component";
import {AdminUserTables} from "./components/adminUsers/adminUserTables.component";
import {MsgCenter} from "./components/msgCenter/msgCenter.component";
import {WorksTable} from "./components/works/worksTable.component";

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      {path: 'adminUsers', component: AdminUserTables},
      {path: 'msgCenter', component: MsgCenter},
      {path: 'works', component: WorksTable},
      {path: 'webLinks', component: LinkTables}
    ]
  }
];

export const routing = RouterModule.forChild(routes);
