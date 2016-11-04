import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {addWorksApi, getWorksApi, updateWorksApi, delWorksApi} from "./../../../../../api.config";
import {Observable} from "rxjs";
import {WorkModel} from "./workModel";
@Injectable()
export class WorksTablesService {

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
  addRow(workModel: WorkModel): Observable<any> {
    let body = JSON.stringify(workModel);
    return this.http.post(addWorksApi, body, this.options)
      .map(res => res.json());
  }


  /**
   * 删除数据
   * @param id
   * @returns {Observable<R>}
   */
  delRow(id: number): Observable<any> {
    return this.http.get(delWorksApi + "/" + id, this.options)
      .map(res => res.json());
  }

  /**
   * 修改数据
   * @returns {Observable<R>}
   */
  updateRow(workModel: WorkModel): Observable<any> {
    let body = JSON.stringify(workModel);
    return this.http.post(updateWorksApi, body, this.options)
      .map(res => res.json());
  }


  /**
   * 查
   * @returns {Observable<R>}
   */
  getData(): Observable<any> {
    return this.http.get(getWorksApi).map(res=> {
      return res.json();
    })
  }

}
