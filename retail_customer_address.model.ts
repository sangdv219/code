import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { ProvinceModel } from './province.model';
import { DistrictModel } from './district.model';
import { WardModel } from './ward.model';
import { BaseModel } from 'src/common/base/base.model';
import { RetailCustomerModel } from './retail_customer.model';

@Table({
  modelName: 'retail_customer_addresses',
})
export class RetailCustomerAddressModel extends BaseModel {
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
    type: DataType.BOOLEAN,
  })
  is_default: boolean;

  @Column({
    type: DataType.ENUM('HOME', 'COMPANY'),
    allowNull: false,
  })
  address_type: string;

  @ForeignKey(() => RetailCustomerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    references: {
      model: 'retail_customers',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  retail_customer_id: string;

  @ForeignKey(() => ProvinceModel)
  @Column({
    type: DataType.INTEGER,
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
    type: DataType.INTEGER,
    allowNull: false,
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
    allowNull: false,
    references: {
      model: 'wards',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  ward_id: number;

  @BelongsTo(() => RetailCustomerModel)
  retail_customer: RetailCustomerModel;

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
