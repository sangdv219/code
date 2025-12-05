import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { WmsOrderLineModel } from 'src/modules/wms/base/wms-order-line.model';
import { StockTransferOrderModel, GoodsModel } from './_';

@Table({ modelName: 'stock_transfer_order_lines' })
export class StockTransferOrderLineModel extends WmsOrderLineModel {
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

  @ForeignKey(() => StockTransferOrderModel)
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

  @BelongsTo(() => StockTransferOrderModel, {
    foreignKey: 'parent_id',
  })
  stock_transfer_order: StockTransferOrderModel;

  @BelongsTo(() => GoodsModel, { foreignKey: 'goods_id' })
  goods: GoodsModel;
}
