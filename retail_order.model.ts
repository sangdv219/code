import {
  Column,
  Table,
  DataType,
  HasMany,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { RetailOrderItemModel } from './retail_order_item.model';
import { RetailOrderStepLogModel } from './retail_order_step_log.model';
import { RetailStoreModel } from './retail_store.model';
import { RetailStaffModel } from './retail_staff.model';

@Table({ modelName: 'retail_orders' })
export class RetailOrderModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.ENUM('on_confirm', 'complete_confirm', 'complete', 'cancel'),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: integer;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  customer_name: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  customer_phone: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  customer_address: string;

  @Column({
    type: DataType.UUID,
  })
  user_id: string;

  @ForeignKey(() => RetailStaffModel)
  @Column({
    type: DataType.UUID,
  })
  sale_by_staff_id: string;

  @ForeignKey(() => RetailStoreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_store_id: string;

  @Column({
    type: DataType.ENUM('COD', 'TRANSFER'),
    allowNull: false,
  })
  payment_method: string;

  @Column({ type: DataType.INTEGER })
  total_amount: integer;

  @Column({ type: DataType.INTEGER })
  commissions: integer;

  @Column({ type: DataType.INTEGER })
  shipping_amount: integer;

  @Column({
    type: DataType.ENUM('ONLINE', 'OFFLINE'),
    allowNull: false,
  })
  purchase_method: string;

  @Column({
    type: DataType.ENUM('OPERATOR', 'CUSTOMER'),
    allowNull: false,
  })
  creator: string;

  @Column({
    type: DataType.STRING(255),
  })
  seller_name: string;

  @BelongsTo(() => RetailStaffModel, 'sale_by_staff_id')
  sale_by_staff: RetailStaffModel;

  @Column({ type: DataType.STRING(512) })
  note: string;

  @BelongsTo(() => RetailStoreModel, 'retail_store_id')
  retail_store: RetailStoreModel;

  @HasMany(() => RetailOrderItemModel)
  retail_order_items: RetailOrderItemModel[];

  @HasMany(() => RetailOrderStepLogModel)
  retail_order_step_logs: RetailOrderItemModel[];
}
