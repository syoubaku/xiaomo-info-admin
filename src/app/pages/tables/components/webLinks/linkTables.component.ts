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
      // createTime: {
      //   title: '创建时间',
      //   type: 'date'
      // },
      // updateTime: {
      //   title: '更新时间',
      //   type: 'date'
      // }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: LinkTablesService) {
    this.service.getData().subscribe(res=> {
      console.log(res.data.content);
      this.source.load(res.data.content);
    })
  }


  onDeleteConfirm(event): void {
    if (window.confirm('确定要删除吗?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
