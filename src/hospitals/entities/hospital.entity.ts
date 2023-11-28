import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User as User } from '../../users/entities/user.entity';

@Entity()
export class Hospitals {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  address: string;

  @Column()
  phone_number: string;

  @Column()
  ratings: string;

  @Column({ type: 'datetime', default: null })
  created_at?: Date;

  @Column({ type: 'datetime', default: null })
  updated_at?: Date;

  @ManyToOne(() => User, (user) => user.hospitals)
  user: User;
}
