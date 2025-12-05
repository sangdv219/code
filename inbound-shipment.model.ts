import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import {
  InboundShipmentItemModel,
  OutboundShipmentModel,
  WarehouseModel,
} from './_';
import { BaseModel } from 'src/common/base/base.model';

@Table({ modelName: 'inbound_shipments' })
export class InboundShipmentModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(500),
  })
  ref_code: string;

  @Column({
    type: DataType.STRING(500),
  })
  note: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.DATE,
  })
  execution_date: Date;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  contact_phone: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  contact_name: string;

  @ForeignKey(() => OutboundShipmentModel)
  @Column({
    type: DataType.UUID,
  })
  outbound_shipment_id: string;

  @Column({
    type: DataType.STRING(100),
  })
  order_code: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  inbound_warehouse_id: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING(100),
  })
  cancel_reason: string;

  @BelongsTo(() => OutboundShipmentModel, {
    foreignKey: 'outbound_shipment_id',
  })
  outbound_shipment: OutboundShipmentModel;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'inbound_warehouse_id' })
  inbound_warehouse: WarehouseModel;

  @HasMany(() => InboundShipmentItemModel)
  inbound_shipment_items: InboundShipmentItemModel[];
}
