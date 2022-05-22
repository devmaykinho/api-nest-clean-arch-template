import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'product' })
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column({ type: 'float' })
  value: number;
}
