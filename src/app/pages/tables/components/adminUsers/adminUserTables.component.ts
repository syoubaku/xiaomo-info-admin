import {Component, ViewEncapsulation} from "@angular/core";
import { AdminUserTablesService } from "./adminUserTables.service";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'adminUsers-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./adminUserTable.scss')],
  template: require('./adminUserTable.html')
})
export class AdminUserTables {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      name: {
        title: '名字',
        type: 'string'
      },
      url: {
        title: 'url',
        type: 'string'
      },
      order: {
        title: '顺序',
        type: 'string'
      },
      createTime: {
        title: '创建时间',
        type: 'string'
      },
      updateTime: {
        title: '更新时间',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: AdminUserTablesService) {
    this.service.getData().subscribe(res => {
      this.source.load(res.data);
      this.source.setSort([{field: 'order', direction: 'asc'}]);
    })
  }


  /**
   * 添加数据
   * @param event
   */
  onCreate(event): void {
    this.service.addRow(event.newData).subscribe((res)=> {
      if (res.code == 0) {
        console.log("新增数据成功");
        event.confirm.resolve();
        this.service.getData().subscribe(res => {
          this.source.load(res.data);
          this.source.setSort([{field: 'order', direction: 'asc'}]);
        })
      }
    });
  }

  /**
   * 修改数据
   * @param event
   */
  onEdit(event): void {
    this.service.updateRow(event.data).subscribe((res)=> {
      if (res.code == 0) {
        console.log("修改数据成功");
        event.confirm.resolve();
      }
    });
  }


  /**
   * 删除数据
   * @param event
   */
  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗?')) {
      this.service.delRow(event.data.id).subscribe((res)=> {
        if (res.code == 0) {
          console.log("删除id为 %s 的数据", event.data.id);
        }
      });
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
