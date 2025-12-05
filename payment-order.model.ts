import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { PaymentOrderStates } from 'src/common/constants/payment-order-states';
import { OrderModel } from './_';

@Table({ modelName: 'payment_orders' })
export class PaymentOrderModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.DATE,
  })
  complete_at?: Date;

  @Column({
    type: DataType.ENUM(...Object.values(PaymentOrderStates)),
    allowNull: false,
    defaultValue: PaymentOrderStates.Pending,
  })
  state: PaymentOrderStates;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: number;

  @Column({
    type: DataType.STRING,
  })
  transaction_code?: string;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_id: string;

  @BelongsTo(() => OrderModel, { foreignKey: 'order_id' })
  order: OrderModel;
}
