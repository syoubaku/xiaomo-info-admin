import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {getUserApi} from "./../../../../../api.config";
import {Observable} from "rxjs";
import {AdminUserModel} from "../adminUsers/adminUser.model";

@Injectable()
export class MsgCenterService {

  options: RequestOptions;

  constructor(public http: Http) {
    let headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({
      headers: headers
    });
  }

  /**
   * 查找用户
   * @returns {Observable<R>}
   */
  findUser(userName: string): Observable<any> {
    return this.http.get(getUserApi + "/" + userName)
      .map(res => res.json());
  }


  /**
   * 保存用户
   * @param adminModel
   * @returns {Observable<R>}
   */
  saveUser(adminModel: AdminUserModel): Observable<any> {
    return this.http.post(getUserApi, JSON.stringify(adminModel), this.options)
      .map(res => res.json());
  }
}
