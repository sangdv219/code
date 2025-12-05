import { Column, Table, DataType, HasMany } from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailCustomerAddressModel } from './retail_customer_address.model';

@Table({ modelName: 'retail_customers' })
export class RetailCustomerModel extends BaseModel {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  avatar: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.ENUM('MALE', 'FEMALE', 'OTHER'),
  })
  sex: string;

  @Column({
    type: DataType.DATE,
  })
  birthday: Date;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;

  @HasMany(() => RetailCustomerAddressModel)
  customer_addresses: RetailCustomerAddressModel[];

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
