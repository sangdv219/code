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
import {
  TikiReturnShipmentBoxModel,
  TikiReturnShipmentItemModel,
  WarehouseModel,
} from './_';

@Table({ modelName: 'tiki_return_shipments' })
export class TikiReturnShipmentModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(WmsOrderStates)),
    allowNull: false,
    defaultValue: WmsOrderStates.Pending,
  })
  state: WmsOrderStates;

  @Column({
    type: DataType.INTEGER,
  })
  shipment_id: number;

  @Column({
    type: DataType.STRING(500),
  })
  shipment_code: string;

  @Column({
    type: DataType.INTEGER,
  })
  seller_id: number;

  @Column({
    type: DataType.STRING(500),
  })
  ref_code: string;

  @Column({
    type: DataType.INTEGER,
  })
  expected_quantity: number;

  @Column({
    type: DataType.INTEGER,
  })
  confirmed_quantity: number;

  @Column({
    type: DataType.INTEGER,
  })
  rejected_quantity: number;

  @Column({
    type: DataType.INTEGER,
  })
  received_quantity: number;

  @Column({
    type: DataType.INTEGER,
  })
  liquidated_quantity: number;

  @Column({
    type: DataType.TEXT,
  })
  type: string;

  @Column({
    type: DataType.STRING(100),
  })
  return_status: string;

  @Column({
    type: DataType.STRING(100),
  })
  shipping_plan: string;

  @Column({
    type: DataType.STRING(100),
  })
  expected_pickup_date: string;

  @Column({
    type: DataType.TEXT,
  })
  delivery_info_address_name: string;

  @Column({
    type: DataType.TEXT,
  })
  delivery_info_address_street: string;

  @Column({
    type: DataType.TEXT,
  })
  delivery_info_address_ward_tiki_code: string;

  @Column({
    type: DataType.TEXT,
  })
  delivery_info_contact_name: string;

  @Column({
    type: DataType.TEXT,
  })
  delivery_info_contact_phone: string;

  @Column({
    type: DataType.TEXT,
  })
  delivery_info_contact_email: string;

  @Column({
    type: DataType.STRING(100),
  })
  cancel_reason: string;

  @Column({
    type: DataType.TEXT,
  })
  note: string;

  @Column({
    type: DataType.TEXT,
  })
  extra_ready_to_return_at: string;

  @Column({
    type: DataType.STRING(100),
  })
  order_code: string;

  @Column({
    type: DataType.TEXT,
  })
  expired_at: string;

  @Column({
    type: DataType.TEXT,
  })
  deadline_returned_date: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
  })
  withdraw_warehouse_id: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
  })
  pickup_warehouse_id: string;

  @BelongsTo(() => WarehouseModel, {
    foreignKey: 'withdraw_warehouse_id',
  })
  withdraw_warehouse: WarehouseModel;

  @BelongsTo(() => WarehouseModel, {
    foreignKey: 'pickup_warehouse_id',
  })
  pickup_warehouse: WarehouseModel;

  @HasMany(() => TikiReturnShipmentItemModel)
  return_shipment_items: TikiReturnShipmentItemModel[];

  @HasMany(() => TikiReturnShipmentBoxModel)
  return_shipment_boxes: TikiReturnShipmentBoxModel[];
}
