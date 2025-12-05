import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { ShippingMethodModel, WardModel } from './_';

@Table({ modelName: 'shipping_wards' })
export class ShippingWardModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @ForeignKey(() => WardModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  ward_id: string;

  @ForeignKey(() => ShippingMethodModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  shipping_method_id: string;

  @BelongsTo(() => WardModel, {
    foreignKey: 'ward_id',
  })
  ward: WardModel;

  @BelongsTo(() => ShippingMethodModel, {
    foreignKey: 'shipping_method_id',
  })
  shipping_method: ShippingMethodModel;
}
