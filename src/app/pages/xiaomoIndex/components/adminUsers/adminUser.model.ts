export class AdminUserModel {

  private name: string;

  private order: number;

  private url: string;


  constructor(name: string, order: number, url: string) {
    this.name = name;
    this.order = order;
    this.url = url;
  }


}
