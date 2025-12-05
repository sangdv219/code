import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { GoodsModel, TikiDeliveryOrderModel } from './_';

@Table({ modelName: 'tiki_delivery_order_items' })
export class TikiDeliveryOrderItemModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
  })
  sku: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  goods_id: string;

  @ForeignKey(() => TikiDeliveryOrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  delivery_order_id: string;

  @BelongsTo(() => GoodsModel, {
    foreignKey: 'goods_id',
  })
  goods: GoodsModel;

  @BelongsTo(() => TikiDeliveryOrderModel, {
    foreignKey: 'delivery_order_id',
  })
  delivery_order: TikiDeliveryOrderModel;
}
