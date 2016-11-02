import {Component, ViewEncapsulation} from "@angular/core";
import {LinkTablesService} from "./linkTables.service";
import {LocalDataSource} from "ng2-smart-table";

@Component({
  selector: 'basic-tables',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./linkTables.scss')],
  template: require('./linkTables.html')
})
export class LinkTables {

  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: 'id',
        type: 'number'
      },
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
        type: 'number'
      },
      version: {
        title: '版本',
        type: 'number'
      },
      createTime: {
        title: '创建时间',
        type: 'date'
      },
      updateTime: {
        title: '更新时间',
        type: 'date'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: LinkTablesService) {
    this.service.getData().subscribe(res => {
      this.source.load(res.data);
    })
  }

  onCreate(event): void {
    console.log(111111111);
    alert("create" + event);
  }


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
