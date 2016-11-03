import {Injectable} from "@angular/core";
import {Http, Headers, RequestOptions} from "@angular/http";
import {addLinkApi, getLinkApi, updateLinkApi, delLinkApi} from "./../../../../../api.config";
import {Observable} from "rxjs";
import {LinkModel} from "./link.model";
@Injectable()
export class LinkTablesService {

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
  addRow(linkModel: LinkModel): Observable<any> {
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
  updateRow(linkModel: LinkModel): Observable<any> {
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


  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];
}
