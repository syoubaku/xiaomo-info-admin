import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {getAdminUserAllApi, addAdminUserApi, updateAdminUserApi, delAdminUserApi} from "./../../../../../api.config";
import {Observable} from "rxjs";
import {AdminUserModel} from "./adminUser.model";
@Injectable()
export class AdminUserTablesService {

  options: RequestOptions;

  constructor(public http: Http) {
    let headers = new Headers({'Content-Type': 'application/json'});
    this.options = new RequestOptions({
      headers: headers
    });
  }


  /**
   * 增加数据
   * @returns {Observable<R>}
   */
  addRow(adminUserModel: AdminUserModel): Observable<any> {
    let body = JSON.stringify(adminUserModel);
    return this.http.post(addAdminUserApi, body, this.options)
      .map(res => res.json());
  }


  /**
   * 删除数据
   * @param id
   * @returns {Observable<R>}
   */
  delRow(id: number): Observable<any> {
    return this.http.get(delAdminUserApi + "/" + id, this.options)
      .map(res => res.json());
  }

  /**
   * 修改数据
   * @returns {Observable<R>}
   */
  updateRow(adminUserModel: AdminUserModel): Observable<any> {
    let body = JSON.stringify(adminUserModel);
    return this.http.post(updateAdminUserApi, body, this.options)
      .map(res => res.json());
  }


  /**
   * 查
   * @returns {Observable<R>}
   */
  getData(): Observable<any> {
    return this.http.get(getAdminUserAllApi).map(res=> {
      return res.json();
    })
  }

}
