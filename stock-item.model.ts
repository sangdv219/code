import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { GoodsModel, OrderModel, WarehouseModel } from './_';

@Table({ modelName: 'stock_items' })
export class StockItemModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @Column({
    type: DataType.DATE,
  })
  expiry_date?: Date;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  goods_id: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  warehouse_id: string;

  // @ForeignKey(() => OrderModel)
  // @Column({
  //   type: DataType.UUID,
  // })
  // order_id: string;

  // @BelongsTo(() => OrderModel, {
  //   foreignKey: 'order_id',
  // })
  // order: OrderModel;

  @BelongsTo(() => GoodsModel, { foreignKey: 'goods_id' })
  goods: GoodsModel;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;

  @Column({
    type: DataType.STRING,
  })
  note: string;
}
