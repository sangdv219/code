import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './_';

@Table({ modelName: 'product_price_schedules' })
export class ProductPriceScheduleModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  priority?: number;

  @Column({
    type: DataType.DATE,
  })
  start_date?: Date;

  @Column({
    type: DataType.DATE,
  })
  end_date?: Date;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  product_id: string;

  @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
  product: ProductModel;
}
