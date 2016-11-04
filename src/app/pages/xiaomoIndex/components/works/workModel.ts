
export class WorkModel{

  private name:string;

  private url:string;

  private imgUrl:string;

  private summary:string;

  private completeTime:string;


  constructor(name: string, url: string, imgUrl: string, summary: string, completeTime: string) {
    this.name = name;
    this.url = url;
    this.imgUrl = imgUrl;
    this.summary = summary;
    this.completeTime = completeTime;
  }
}
