import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { OrderItemTypes } from 'src/common/constants/_';
import { OrderModel } from './_';

@Table({ modelName: 'order_items' })
export class OrderItemModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(OrderItemTypes)),
    allowNull: false,
  })
  object_type: OrderItemTypes;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  object_id: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: integer;

  @Column({
    type: DataType.INTEGER,
  })
  promotion_price: integer;

  @Column({
    type: DataType.INTEGER,
  })
  discount: integer;

  @Column({
    type: DataType.TEXT,
  })
  note: string;

  @Column({
    type: DataType.INTEGER,
  })
  vat: integer;

  @Column({
    type: DataType.INTEGER,
  })
  original_price: integer;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_id: string;

  @BelongsTo(() => OrderModel, { foreignKey: 'order_id' })
  order: OrderModel;
}
