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
import { TikiInboundShipmentItemModel } from './tiki-inbound-shipment-item.model';
import { WmsOrderStates } from 'src/common/constants/wms-order-states';
import { WarehouseModel } from './warehouse.model';

@Table({ modelName: 'tiki_inbound_shipments' })
export class TikiInboundShipmentModel extends BaseModel {
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
  ref_code: string;

  @Column({
    type: DataType.INTEGER,
  })
  seller_id: number;

  @Column({
    type: DataType.STRING(100),
  })
  inbound_status: string;

  @Column({
    type: DataType.TEXT,
  })
  inbound_status_vi: string;

  @Column({
    type: DataType.TEXT,
  })
  inbound_status_en: string;

  @Column({
    type: DataType.STRING(100),
  })
  shipping_plan: string;

  @Column({
    type: DataType.STRING(100),
  })
  order_type: string;

  @Column({
    type: DataType.STRING(100),
  })
  expected_inbound_timeslot_date: string;

  @Column({
    type: DataType.STRING(100),
  })
  expected_inbound_timeslot_session: string;

  @Column({
    type: DataType.STRING(100),
  })
  cancel_reason: string;

  @Column({
    type: DataType.INTEGER,
  })
  expected_quantity: number;

  @Column({
    type: DataType.INTEGER,
  })
  received_quantity: number;

  @Column({
    type: DataType.INTEGER,
  })
  rejected_quantity: number;

  @Column({
    type: DataType.STRING(200),
  })
  pickup_info_address_name: string;

  @Column({
    type: DataType.STRING(1000),
  })
  pickup_info_address_street: string;

  @Column({
    type: DataType.STRING(100),
  })
  pickup_info_address_ward_tiki_code: string;

  @Column({
    type: DataType.STRING(200),
  })
  pickup_info_contact_name: string;

  @Column({
    type: DataType.STRING(20),
  })
  pickup_info_contact_phone: string;

  @Column({
    type: DataType.STRING(500),
  })
  pickup_info_contact_email: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
  })
  inbound_warehouse_id: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  receive_warehouse_id: string;

  @BelongsTo(() => WarehouseModel, {
    foreignKey: 'inbound_warehouse_id',
  })
  inbound_warehouse: WarehouseModel;

  @BelongsTo(() => WarehouseModel, {
    foreignKey: 'receive_warehouse_id',
  })
  receive_warehouse: WarehouseModel;

  @HasMany(() => TikiInboundShipmentItemModel)
  inbound_shipment_items: TikiInboundShipmentItemModel[];
}
