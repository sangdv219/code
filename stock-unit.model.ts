import { Column, Table, DataType, HasMany } from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { GoodsModel } from './_';

@Table({ modelName: 'stock_units' })
export class StockUnitModel extends BaseModel {
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
    defaultValue: 1,
  })
  quantity: number;

  @Column({
    type: DataType.TEXT,
  })
  image_link?: string;

  @HasMany(() => GoodsModel)
  goods: GoodsModel[];
}
