import {Component, ViewEncapsulation} from "@angular/core";
import {MsgCenterService} from "./msgCenter.service";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {AdminUserModel} from "../adminUsers/adminUser.model";

@Component({
  selector: 'msgCenter',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./msgCenter.scss')],
  template: require('./msgCenter.html')
})
export class MsgCenter {

  message: string;
  public form: FormGroup;
  public userName: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public user: string;
  public pwd: string;

  constructor(fb: FormBuilder, protected service: MsgCenterService) {
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.userName = this.form.controls['userName'];
    this.password = this.form.controls['password'];

    let currentUser = localStorage.getItem("currentUser");
    this.service.findUser(currentUser).subscribe(res => {
      if (res.code == 0) {
        this.user = res.data.userName;
      } else {
        alert(res.message);
      }
    })
  }


  /**
   * 保存数据
   * @param values
   */
  public onSubmit(values: AdminUserModel): void {
    this.submitted = true;
    if (this.form.valid) {
      this.service.saveUser(values).subscribe(res=> {
        if (res.message) {
          this.message = res.message;
          return;
        } else {
          this.message = "保存成功！";
        }
      })
    }
  }

}
