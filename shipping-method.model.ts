import {
  Column,
  Table,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { OrderModel, ShippingProviderModel } from './_';
import { RoleTypeEnum } from 'src/common/constants/role-types';

@Table({ modelName: 'shipping_methods' })
export class ShippingMethodModel extends BaseModel {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  estimate_day: integer;

  @Column({
    type: DataType.STRING(500),
  })
  shipping_plan: string;

  @Column({
    type: DataType.STRING(255),
  })
  alert: string;

  @Column({
    type: DataType.INTEGER
  })
  shipping_percent: integer;

  @Column({
    type: DataType.ENUM(...Object.values(RoleTypeEnum)),
  })
  type: RoleTypeEnum;

  @ForeignKey(() => ShippingProviderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  shipping_provider_id: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price_ratio: integer;

  @BelongsTo(() => ShippingProviderModel, {
    foreignKey: 'shipping_provider_id',
  })
  shipping_provider: ShippingProviderModel;

  @HasMany(() => OrderModel)
  order: OrderModel[];
}
