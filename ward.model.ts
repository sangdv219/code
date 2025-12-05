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
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { ProvinceModel } from './province.model';
import { DistrictModel } from './district.model';

@Table({
  modelName: 'wards',
  timestamps: false,
})
export class WardModel extends Model<WardModel> {
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

  @Column({
    type: DataType.STRING,
  })
  tiki_ward_code: string;

  @Column({
    type: DataType.STRING,
  })
  efulfillment_ward_code: string;

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

  @ForeignKey(() => DistrictModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    references: {
      model: 'districts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  district_id: number;

  @BelongsTo(() => ProvinceModel)
  province: ProvinceModel;

  @BelongsTo(() => DistrictModel)
  district: DistrictModel;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
