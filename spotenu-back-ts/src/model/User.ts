export class User {
  constructor(
    private id: string,
    private name: string,
    private nickName: string,
    private password: string,
    private email: string,
    private role: UserRole,
    private description?: string
  ) {}

  public getId(): string {
    return this.id;
  }
  public getName(): string {
    return this.name;
  }
  public getNickname(): string {
    return this.nickName;
  }
  public getPassword(): string {
    return this.password;
  }
  public getEmail(): string {
    return this.email;
  }
  public getRole(): string {
    return this.role;
  }
  public getDescription(): string | undefined {
    return this.description;
  }
}

export enum UserRole {
  ADMIN = "Admin",
  User = "User",
  Band = "Band",
}
