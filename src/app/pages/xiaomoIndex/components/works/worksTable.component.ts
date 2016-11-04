import {Component, ViewChild} from "@angular/core";
import {ModalDirective} from "ng2-bootstrap";
import {WorksTablesService} from "./worksTables.service";
import {FormGroup, AbstractControl, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'works-table',
  styles: [require("./worksTable.scss")],
  template: require('./worksTable.html')
})
export class WorksTable {

  works: Array<any>;


  message: string;
  public form: FormGroup;
  public userName: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;
  public user: string;
  public pwd: string;


  constructor(fb: FormBuilder, public service: WorksTablesService) {
    this.form = fb.group({
      'userName': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.userName = this.form.controls['userName'];
    this.password = this.form.controls['password'];


    this.service.getData().subscribe(res=> {
      this.works = res.data;
    })
  }

  @ViewChild('addModel') addModel: ModalDirective;
  @ViewChild('updateModal') updateModel: ModalDirective;

  /**
   * 添加作品弹窗
   */
  showAddModal(): void {
    this.addModel.show();
  }

  /**
   * 修改作品弹窗
   * @param id
   */
  showUpdateModal(id) {
    // todo 查询 修改
    this.updateModel.show();
  }


  /**
   * 保存作品弹窗
   * @param param
   */
  hideChildModal(param: boolean): void {
    if (param) {
      // todo 保存
      this.addModel.hide();
      this.updateModel.hide();
    } else {
      this.addModel.hide();
      this.updateModel.hide();
    }
  }


  /**
   * 删除一行
   * @param id
   */
  delRow(id: number): void {
    if (confirm("确定要删除吗")) {
      this.service.delRow(id).subscribe(res => {
        if (res.code == 0) {
          console.log("删除作品中数据id为" + id + "的数据");
          this.service.getData().subscribe(res => {
            this.works = res.data;
          })
        }
      })
    }
  }

}
