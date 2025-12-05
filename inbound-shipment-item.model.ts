import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/base.model';
import { GoodsModel, InboundShipmentModel } from './_';

@Table({ modelName: 'inbound_shipment_items' })
export class InboundShipmentItemModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  expected_quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  received_quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.DATE,
  })
  expiry_date?: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  manufacture_date: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 10,
  })
  vat: number;

  @ForeignKey(() => InboundShipmentModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  inbound_shipment_id: string;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  goods_id: string;

  @BelongsTo(() => InboundShipmentModel, {
    foreignKey: 'inbound_shipment_id',
  })
  inbound_shipment: InboundShipmentModel;

  @BelongsTo(() => GoodsModel, { foreignKey: 'goods_id' })
  goods: GoodsModel;
}
