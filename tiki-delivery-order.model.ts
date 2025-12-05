import {
  Table,
  HasMany,
  Column,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { WmsOrderStates } from 'src/common/constants/wms-order-states';
import { OrderModel, TikiDeliveryOrderItemModel, WarehouseModel } from './_';

@Table({ modelName: 'tiki_delivery_orders' })
export class TikiDeliveryOrderModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(WmsOrderStates)),
    allowNull: false,
    defaultValue: WmsOrderStates.Pending,
  })
  state: WmsOrderStates;

  @Column({
    type: DataType.INTEGER,
  })
  seller_id: number;

  @Column({
    type: DataType.STRING(100),
  })
  order_code: string;

  @Column({
    type: DataType.STRING(100),
  })
  delivery_status: string;

  @Column({
    type: DataType.STRING(500),
  })
  ref_code: string;

  @Column({
    type: DataType.STRING(100),
  })
  shipping_plan: string;

  @Column({
    type: DataType.INTEGER,
  })
  shipping_fee: number;

  @Column({
    type: DataType.INTEGER,
  })
  receivable: number;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
  })
  issue_warehouse_id?: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
  })
  tiki_warehouse_id?: string;

  @Column({
    type: DataType.STRING(300),
  })
  shipping_address_full_name: string;

  @Column({
    type: DataType.STRING(1000),
  })
  shipping_address_street: string;

  @Column({
    type: DataType.STRING(100),
  })
  shipping_address_ward_tiki_code: string;

  @Column({
    type: DataType.STRING(20),
  })
  shipping_address_phone: string;

  @Column({
    type: DataType.STRING(500),
  })
  shipping_address_email: string;

  @Column({
    type: DataType.STRING(100),
  })
  delivery_address_type: string;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_id: string;

  @BelongsTo(() => OrderModel, {
    foreignKey: 'order_id',
  })
  order: OrderModel;

  @BelongsTo(() => WarehouseModel, {
    foreignKey: 'issue_warehouse_id',
  })
  issue_warehouse?: WarehouseModel;

  @BelongsTo(() => WarehouseModel, {
    foreignKey: 'tiki_warehouse_id',
  })
  tiki_warehouse: WarehouseModel;

  @HasMany(() => TikiDeliveryOrderItemModel)
  items: TikiDeliveryOrderItemModel[];
}
