import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import { getUserApi } from "./../../../../../api.config";
import {Observable} from "rxjs";

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
}
