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
  ForeignKey, BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { CustomerModel } from './customer.model';

@Table({
  modelName: 'ratings',
})
export class RatingModel extends Model<RatingModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  content: string;

  @Column({
    type: DataType.UUID,
  })
  sku_id: string;

  @Column({
    type: DataType.UUID,
  })
  item_id: string;

  @Column({
    type: DataType.UUID,
  })
  @ForeignKey(() => CustomerModel)
  customer_id: string;

  @Column({
    type: DataType.INTEGER,
  })
  rating: number;

  @Column({
    type: DataType.STRING,
  })
  images: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @BelongsTo(() => CustomerModel, 'customer_id')
  customer: CustomerModel;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
