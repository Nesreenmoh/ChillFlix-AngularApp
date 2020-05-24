export class Video {
  public id: string;
  public title: string;
  public description: string;
  public url: string;
  public published_date: string;
  public rating?: number;
  public date_added: string;
  public type: string;
  category?: {
    id?: number;
    name?: string;
  };
}
