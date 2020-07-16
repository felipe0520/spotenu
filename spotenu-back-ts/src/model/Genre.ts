export class Genre {
  constructor(private name: string, private id: string) {}
  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
}
