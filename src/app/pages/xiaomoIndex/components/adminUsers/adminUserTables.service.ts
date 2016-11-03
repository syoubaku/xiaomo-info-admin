import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {addLinkApi, getLinkApi, updateLinkApi, delLinkApi} from "./../../../../../api.config";
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
  addRow(linkModel: AdminUserModel): Observable<any> {
    let body = JSON.stringify(linkModel);
    return this.http.post(addLinkApi, body, this.options)
      .map(res => res.json());
  }


  /**
   * 删除数据
   * @param id
   * @returns {Observable<R>}
   */
  delRow(id: number): Observable<any> {
    return this.http.get(delLinkApi + "/" + id, this.options)
      .map(res => res.json());
  }

  /**
   * 修改数据
   * @returns {Observable<R>}
   */
  updateRow(linkModel: AdminUserModel): Observable<any> {
    let body = JSON.stringify(linkModel);
    return this.http.post(updateLinkApi, body, this.options)
      .map(res => res.json());
  }


  /**
   * 查
   * @returns {Observable<R>}
   */
  getData(): Observable<any> {
    return this.http.get(getLinkApi).map(res=> {
      return res.json();
    })
  }

}
