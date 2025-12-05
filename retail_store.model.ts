import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { SellerModel } from './seller.model';
import { RetailProductModel } from './retail_product.model';
import { RetailOrderModel } from './retail_order.model';
import { RetailStaffRoleStoreModel } from './retail_staff_role_store.model';

@Table({ modelName: 'retail_stores' })
export class RetailStoreModel extends BaseModel {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  ascii_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nick_name: string;

  @Column({
    type: DataType.TEXT,
  })
  qr_code: string;

  @Column({
    type: DataType.TEXT,
  })
  avatar: string;

  @Column({
    type: DataType.TEXT,
  })
  banner: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  status: boolean;

  @Column({
    type: DataType.STRING,
  })
  bank_account: string;

  @Column({
    type: DataType.STRING,
  })
  bank_account_holder: string;

  @Column({
    type: DataType.STRING,
  })
  bank_account_name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  phone_number: string;

  @ForeignKey(() => SellerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  seller_id: string;

  @ForeignKey(() => RetailStoreModel)
  @Column({ type: DataType.UUID })
  parent_store_id: string;

  @BelongsTo(() => RetailStoreModel, 'parent_store_id')
  parent_store: RetailStoreModel;

  @HasMany(() => RetailStoreModel)
  children_stores: RetailStoreModel;

  @BelongsTo(() => SellerModel, 'seller_id')
  seller: SellerModel;

  @HasMany(() => RetailProductModel)
  retail_products: RetailProductModel[];

  @HasMany(() => RetailOrderModel)
  retail_order: RetailOrderModel[];

  @HasMany(() => RetailStaffRoleStoreModel)
  retail_staff_role_stores: RetailStaffRoleStoreModel;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
