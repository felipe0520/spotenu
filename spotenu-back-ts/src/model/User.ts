export class User {
  constructor(
    private name: string,
    private nickName: string,
    private email: string,
    private password: string,
    private id: string,
    private role: UserRole,
    private aproved: number,
    private description?: string | undefined
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
  public getAproved(): number | undefined {
    return this.aproved;
  }
  public getDescription(): string | undefined {
    return this.description;
  }
}

export enum UserRole {
  ADMIN = "Admin",
  USER = "User",
  BANDA = "Band",
}

export const stringToUserRole = (input: string): UserRole => {
  switch (input) {
    case "band":
      return UserRole.BANDA;
    case "admin":
      return UserRole.ADMIN;
    case "user":
      return UserRole.USER;
    default:
      throw new Error("Invalid user role");
  }
};
