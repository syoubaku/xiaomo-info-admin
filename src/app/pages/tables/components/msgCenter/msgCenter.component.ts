import {Component, ViewEncapsulation} from "@angular/core";
import {MsgCenterService} from "./msgCenter.service";
import {AdminUserModel} from "../adminUsers/adminUser.model";

@Component({
  selector: 'msgCenter',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./msgCenter.scss')],
  template: require('./msgCenter.html')
})
export class MsgCenter {

  adminModel: AdminUserModel;

  constructor(protected service: MsgCenterService) {
    let currentUser = localStorage.getItem("currentUser");
    this.service.findUser(currentUser).subscribe(res => {
      this.adminModel = res.data;
    })
  }


}
