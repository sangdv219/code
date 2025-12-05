import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { DistrictModel, ShippingMethodModel } from './_';

@Table({ modelName: 'shipping_districts' })
export class ShippingDistrictModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
  })
  price: number;

  @ForeignKey(() => DistrictModel)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  district_id: string;

  @ForeignKey(() => ShippingMethodModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  shipping_method_id: string;

  @BelongsTo(() => DistrictModel, {
    foreignKey: 'district_id',
  })
  district: DistrictModel;

  @BelongsTo(() => ShippingMethodModel, {
    foreignKey: 'shipping_method_id',
  })
  shipping_method: ShippingMethodModel;
}
