import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  public name: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public phone: string;

  constructor(name: string, email: string, phone: string) {
    this.name = name;
    this.email = email;
    this.phone = phone;
  }
}
