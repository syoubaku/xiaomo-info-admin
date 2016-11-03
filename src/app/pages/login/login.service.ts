import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {loginApi} from "../../../api.config";

@Injectable()
export class LoginService {

  options: RequestOptions;

  constructor(public http: Http) {
    let headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({
      headers: headers
    });
  }

  login(userName, password) {
    let body = JSON.stringify({userName: userName, password: password});
    return this.http.post(loginApi, body, this.options)
      .map(res => res.json());
  }

}
