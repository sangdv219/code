import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/base.model';
import { GoodsModel, OutboundShipmentModel } from './_';

@Table({ modelName: 'outbound_shipment_items' })
export class OutboundShipmentItemModel extends BaseModel {
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

  @ForeignKey(() => OutboundShipmentModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  outbound_shipment_id: string;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  goods_id: string;

  @BelongsTo(() => OutboundShipmentModel, {
    foreignKey: 'outbound_shipment_id',
  })
  outbound_shipment: OutboundShipmentModel;

  @BelongsTo(() => GoodsModel, { foreignKey: 'goods_id' })
  goods: GoodsModel;
}
