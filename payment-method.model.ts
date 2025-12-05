import { Column, Table, DataType, HasMany } from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { PaymentMethodTypes } from 'src/common/constants/_';
import { OrderModel } from './_';

@Table({ modelName: 'payment_methods' })
export class PaymentMethodModel extends BaseModel {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @HasMany(() => OrderModel)
  order: OrderModel[];

  @Column({
    type: DataType.ENUM(...Object.values(PaymentMethodTypes)),
    allowNull: false,
    defaultValue: PaymentMethodTypes.COD,
  })
  type: PaymentMethodTypes;
}
