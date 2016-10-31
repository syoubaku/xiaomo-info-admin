import { Routes, RouterModule }  from '@angular/router';

import { Tables } from './tables.component';
import { BasicTables } from './components/basicTables/basicTables.component';
import { SmartTables } from './components/smartTables/smartTables.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Tables,
    children: [
      { path: 'adminUsers', component: BasicTables },
      { path: 'webLinks', component: SmartTables }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
