export class Album {
  constructor(
    private name: string,
    private id: string,
    private idBand: string,
    private GenreAlbum: string[]
  ) {}
  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }

  public getIdBand(): string {
    return this.idBand;
  }

  public getGenreAlbum(): string[] {
    return this.GenreAlbum;
  }
}
