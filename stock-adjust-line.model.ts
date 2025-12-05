import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { WmsOrderLineModel } from 'src/modules/wms/base/wms-order-line.model';
import { GoodsModel, StockAdjustModel, StockItemModel } from './_';

@Table({ modelName: 'stock_adjust_lines' })
export class StockAdjustLineModel extends WmsOrderLineModel {
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

  @ForeignKey(() => StockAdjustModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  parent_id: string;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  goods_id: string;

  @ForeignKey(() => StockItemModel)
  @Column({
    type: DataType.UUID,
  })
  stock_item_id?: string;

  @BelongsTo(() => StockAdjustModel, { foreignKey: 'parent_id' })
  stock_adjust: StockAdjustModel;

  @BelongsTo(() => GoodsModel, { foreignKey: 'goods_id' })
  goods: GoodsModel;

  @BelongsTo(() => StockItemModel, { foreignKey: 'stock_item_id' })
  stock_item?: StockItemModel;
}
