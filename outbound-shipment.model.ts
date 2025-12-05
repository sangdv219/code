import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import {
  InboundShipmentModel,
  OutboundShipmentItemModel,
  WarehouseModel,
} from './_';
import { BaseModel } from 'src/common/base/base.model';

@Table({ modelName: 'outbound_shipments' })
export class OutboundShipmentModel extends BaseModel {
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
  })
  order_code: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  outbound_warehouse_id: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.STRING(100),
  })
  cancel_reason: string;

  @Column({ type: DataType.STRING(100) })
  shipping_plan: string;

  @Column({ type: DataType.STRING(100) })
  receiver_name: string;

  @Column({ type: DataType.STRING(20) })
  receiver_phone: string;

  @Column({ type: DataType.JSONB })
  receiver_address: Record<string, any>;

  @Column({ type: DataType.JSONB })
  extra_data: Record<string, any>;

  @Column({ type: DataType.STRING(100) })
  tiki_ward_code: string;

  @HasMany(() => InboundShipmentModel)
  inbound_shipmments: InboundShipmentModel[];

  @BelongsTo(() => WarehouseModel, { foreignKey: 'outbound_warehouse_id' })
  outbound_warehouse: WarehouseModel;

  @HasMany(() => OutboundShipmentItemModel)
  outbound_shipmment_items: OutboundShipmentItemModel[];
}
