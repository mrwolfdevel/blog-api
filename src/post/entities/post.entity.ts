import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Post {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({type: "text"})
  content: string;

  @Column()
  languaje: string;

  @Index()
  @Column()
  visible: boolean;

}
