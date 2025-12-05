import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { TikiInboundShipmentModel } from './tiki-inbound-shipment.model';
import { GoodsModel } from './_';

@Table({ modelName: 'tiki_inbound_shipment_items' })
export class TikiInboundShipmentItemModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
  })
  sku: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
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
    type: DataType.STRING(100),
  })
  rejected_reason: string;

  @Column({
    type: DataType.TEXT,
  })
  rejected_reason_comment: string;

  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  goods_id: string;

  @ForeignKey(() => TikiInboundShipmentModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  inbound_shipment_id: string;

  @BelongsTo(() => GoodsModel, {
    foreignKey: 'goods_id',
  })
  goods: GoodsModel;

  @BelongsTo(() => TikiInboundShipmentModel, {
    foreignKey: 'inbound_shipment_id',
  })
  inbound_shipment: TikiInboundShipmentModel;
}
