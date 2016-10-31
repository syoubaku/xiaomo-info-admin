import {Component, ViewEncapsulation} from "@angular/core";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

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
  public errorMsg: string;

  constructor(fb: FormBuilder, public userService: UserService,public router:Router) {
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.userName = this.form.controls['userName'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      this.userService.login(values["userName"], values["password"]).subscribe(res=> {
        if (res) {
          if (res.errorCode) {
            this.errorMsg = res.errorMsg;
            return;
          }
          localStorage.setItem("currentUser", values["userName"]);
          this.router.navigate(['/pages']);
        }
      })
    }
  }
}
