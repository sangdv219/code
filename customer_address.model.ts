import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { CustomerModel } from './customer.model';
import { ProvinceModel } from './province.model';
import { DistrictModel } from './district.model';
import { WardModel } from './ward.model';

@Table({
  modelName: 'customer_addresses',
})
export class CustomerAddressModel extends Model<CustomerAddressModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => CustomerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    references: {
      model: 'customers',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  customer_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @ForeignKey(() => ProvinceModel)
  @Column({
    type: DataType.INTEGER,
    // allowNull: false,
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
    type: DataType.INTEGER,
    // allowNull: false,
    references: {
      model: 'districts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  district_id: number;

  @ForeignKey(() => WardModel)
  @Column({
    type: DataType.INTEGER,
    // allowNull: false,
    references: {
      model: 'wards',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  ward_id: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_default: boolean;

  @Column({
    type: DataType.STRING,
  })
  address_type: string;

  @Column({
    type: DataType.STRING,
  })
  note: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @BelongsTo(() => CustomerModel)
  customer: CustomerModel;

  @BelongsTo(() => ProvinceModel)
  province: ProvinceModel;

  @BelongsTo(() => DistrictModel)
  district: DistrictModel;

  @BelongsTo(() => WardModel)
  ward: WardModel;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
