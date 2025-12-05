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
} from 'sequelize-typescript';

import * as _ from 'lodash';

@Table({
  modelName: 'customer_levels',
})
export class CustomerLevelModel extends Model<CustomerLevelModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
  })
  icon: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  from: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  to: number;

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
