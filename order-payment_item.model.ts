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
import { OrderModel } from './_';

@Table({ modelName: 'order_payment_items' })
export class OrderPaymentItemModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: integer;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_id: string;

  @BelongsTo(() => OrderModel, { foreignKey: 'order_id' })
  order: OrderModel;
}
