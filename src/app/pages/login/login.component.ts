import {Component, ViewEncapsulation} from "@angular/core";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";

@Component({
  selector: 'login',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./login.scss')],
  template: require('./login.html'),
})
export class Login {

  public form: FormGroup;
  public userName: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public user: any;

  constructor(fb: FormBuilder, public userService: UserService) {
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.userName = this.form.controls['userName'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.userService.login(values["userName"], values["password"]).subscribe(res=> {
        this.user = res;
      });
      console.log(this.user);
      if (!this.user) {
        return;
      }
      localStorage.setItem("currentUser", values.get("userName"));
    }
  }
}
