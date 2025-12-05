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

@Table({
  modelName: 'coin_expired_dates',
})
export class CoinExpiredModel extends Model<CoinExpiredModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.INTEGER,
  })
  expirate_date: number;

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
