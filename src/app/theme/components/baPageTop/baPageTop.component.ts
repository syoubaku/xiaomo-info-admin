import {Component, ViewEncapsulation} from "@angular/core";
import {GlobalState} from "../../../global.state";
import {Router} from "@angular/router";

@Component({
  selector: 'ba-page-top',
  styles: [require('./baPageTop.scss')],
  template: require('./baPageTop.html'),
  encapsulation: ViewEncapsulation.None
})
export class BaPageTop {

  public isScrolled: boolean = false;
  public isMenuCollapsed: boolean = false;

  searchData: string;

  constructor(private _state: GlobalState, public router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }


  /**
   * 登出
   */
  logout(): void {
    let currentUser = localStorage.getItem("currentUser");
    if (currentUser) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login'])
    }
  }

  /**
   * 搜索
   */
  startSearch(): void {
    console.log(this.searchData);
  }


  /**
   * 跳转到个人中心
   */

  jumpToInfoCenter(): void {
    let currentUser = localStorage.getItem("currentUser");
    if (!currentUser) {
      alert("请登录！");
      this.router.navigate(['/login']);
    }
    this.router.navigate(['/pages/tables/msgCenter']);
  }
}
