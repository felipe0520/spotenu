export class Music {
  constructor(
    private name: string,
    private id: string,
    private idAlbum: string
  ) {}
  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }

  public getIdAlbum(): string {
    return this.idAlbum;
  }
}
