import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  PrimaryKey,
  DeletedAt,
  HasOne,
  BelongsToMany,
  ForeignKey,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { CustomerModel } from './customer.model';

@Table({
  modelName: 'coin',
})
export class CoinModel extends Model<CoinModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.UUID,
  })
  @ForeignKey(() => CustomerModel)
  customer_id: string;

  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @Column({
    type: DataType.STRING,
  })
  active: string;

  @Column({
    type: DataType.DATE,
  })
  expirate_date: Date;

  @Column({
    type: DataType.UUID,
  })
  coin_activity_id: string;

  @Column({
    type: DataType.UUID,
  })
  order_id: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_used: boolean;

  @Column({
    type: DataType.INTEGER,
  })
  remain: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
