import {Component, ViewChild} from "@angular/core";
import {ModalDirective} from "ng2-bootstrap";
import {WorksTablesService} from "./worksTables.service";

@Component({
  selector: 'works-table',
  template: require('./worksTable.html')
})
export class WorksTable {

  works: Array<any>;

  constructor(public service: WorksTablesService) {
    this.service.getData().subscribe(res=> {
      this.works = res.data;
    })
  }

  @ViewChild('childModal') childModal: ModalDirective;

  showChildModal(id): void {
    // todo 查询
    this.childModal.show();
  }

  hideChildModal(param: boolean): void {
    if (param) {
      // todo 保存
    } else {
      this.childModal.hide();
    }
  }

  delRow(id): void {

  }

}
