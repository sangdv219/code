import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { TikiReturnShipmentModel } from './tiki-return-shipment.model';
import { GoodsModel } from './_';

@Table({ modelName: 'tiki_return_shipment_items' })
export class TikiReturnShipmentItemModel extends BaseModel {
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
    type: DataType.STRING(100),
  })
  rejected_reason: string;

  @Column({
    type: DataType.TEXT,
  })
  rejected_reason_comment: string;

  @Column({
    type: DataType.TEXT,
  })
  note: string;

  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
  })
  goods_id?: string;

  @ForeignKey(() => TikiReturnShipmentModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  return_shipment_id: string;

  @BelongsTo(() => GoodsModel, {
    foreignKey: 'goods_id',
  })
  goods?: GoodsModel;

  @BelongsTo(() => TikiReturnShipmentModel, {
    foreignKey: 'return_shipment_id',
  })
  return_shipment: TikiReturnShipmentModel;
}
