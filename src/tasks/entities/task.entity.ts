import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
//indica que esta clase es una tabla.
@Entity()
export class Task {
  // crea una columna id auto incrementable
  @PrimaryGeneratedColumn()
  id: number; // se genera automaticamente como clave primaria

  //column cre las normales title y description
  @Column()
  title: string; //campo de texto en la base de datos

  @Column()
  description: string; //campo de texto en la base de datos
}
