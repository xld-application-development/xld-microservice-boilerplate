import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'billers', schema: 'payment_partners' })
export class Biller {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 128 })
  name: string;

  @Column({ type: 'varchar', length: 128 })
  tag: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column({ type: 'timestamp', nullable: true })
  updated?: Date;

  @Column({ type: 'timestamp', nullable: true })
  deleted?: Date;
}
