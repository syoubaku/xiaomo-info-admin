import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule,ReactiveFormsModule} from "@angular/forms";
import {NgaModule} from "../../theme/nga.module";
import {routing} from "./tables.routing";
import {Tables} from "./tables.component";
import {LinkTables} from "./components/webLinks/linkTables.component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {LinkTablesService} from "./components/webLinks/linkTables.service";
import {AdminUserTables} from "./components/adminUsers/adminUserTables.component";
import {AdminUserTablesService} from "./components/adminUsers/adminUserTables.service";
import {MsgCenter} from "./components/msgCenter/msgCenter.component";
import {MsgCenterService} from "./components/msgCenter/msgCenter.service";
import {WorksTable} from "./components/works/worksTable.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
    routing
  ],
  declarations: [
    Tables,
    AdminUserTables,
    LinkTables,
    MsgCenter,
    WorksTable
  ],
  providers: [
    AdminUserTablesService,
    LinkTablesService,
    MsgCenterService
  ]
})
export default class TablesModule {
}
