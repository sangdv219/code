import { Column, Table, DataType, HasMany } from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { OrderModel, ShippingMethodModel } from './_';

@Table({ modelName: 'shipping_providers' })
export class ShippingProviderModel extends BaseModel {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
  })
  code: string;

  @HasMany(() => ShippingMethodModel)
  shipping_methods: ShippingMethodModel[];

  @HasMany(() => OrderModel, {
    foreignKey: 'shipping_provider_id',
  })
  orders: OrderModel[];
}
