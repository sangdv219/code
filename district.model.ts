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
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { ProvinceModel } from './province.model';

@Table({
  modelName: 'districts',
  timestamps: false,
})
export class DistrictModel extends Model<DistrictModel> {
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
  prefix: string;

  @ForeignKey(() => ProvinceModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    references: {
      model: 'provinces',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  province_id: number;

  @BelongsTo(() => ProvinceModel)
  province: ProvinceModel;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
