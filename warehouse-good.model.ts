import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { GoodsModel, ProductModel, WarehouseModel } from './_';

@Table({ modelName: 'warehouse_goods' })
export class WarehouseGoodModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  hold: number;

  @Column({
    type: DataType.INTEGER,
  })
  sellable: number;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  good_id: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  warehouse_id: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  warehouse_code: string;

  @BelongsTo(() => GoodsModel, { foreignKey: 'good_id' })
  good: GoodsModel;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;
}
