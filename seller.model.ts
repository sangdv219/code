import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { CustomerModel } from './customer.model';
import { RetailStoreModel } from './retail_store.model';

@Table({ modelName: 'sellers' })
export class SellerModel extends BaseModel {
  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_block: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_contract: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  has_store: boolean;

  @Column({
    type: DataType.STRING,
  })
  contract_code: string;

  @Column({
    type: DataType.STRING,
  })
  tax_code: string;

  @Column({
    type: DataType.STRING,
  })
  company_name: string;

  @Column({
    type: DataType.STRING,
  })
  company_address: string;

  @Column({
    type: DataType.STRING,
  })
  representative: string;

  @Column({
    type: DataType.STRING,
  })
  contact_email: string;

  @Column({
    type: DataType.STRING,
  })
  contact_phone_number: string;

  @Column({
    type: DataType.STRING,
  })
  contract_url: string;

  @Column({ type: DataType.STRING(255) })
  name: string;

  @Column({ type: DataType.STRING })
  code: string;

  @Column({ type: DataType.STRING })
  sex: string;

  @Column({ type: DataType.STRING })
  note: string;

  @Column({ type: DataType.DATE })
  birthday: string;

  @Column({
    type: DataType.STRING,
    defaultValue: 'B2B2C',
  })
  platform?: string;

  @ForeignKey(() => CustomerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  customer_id: string;

  @BelongsTo(() => CustomerModel, 'customer_id')
  customer: CustomerModel;

  @HasOne(() => RetailStoreModel)
  store: RetailStoreModel;
}
