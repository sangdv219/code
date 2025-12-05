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
  modelName: 'provinces',
  timestamps: false
})
export class ProvinceModel extends Model<ProvinceModel> {
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING,
  })
  code: string;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
