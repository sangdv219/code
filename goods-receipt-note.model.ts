import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { WmsOrderModel } from 'src/modules/wms/base/wms-order.model';
import {
  GoodsReceiptNoteLineModel,
  StockTransferOrderModel,
  WarehouseModel,
} from './_';

@Table({ modelName: 'goods_receipt_notes' })
export class GoodsReceiptNoteModel extends WmsOrderModel {
  @Column({
    type: DataType.STRING(200),
  })
  ref_code?: string;

  @Column({
    type: DataType.STRING(200),
  })
  note?: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  warehouse_id: string;

  @ForeignKey(() => StockTransferOrderModel)
  @Column({
    type: DataType.UUID,
  })
  stock_transfer_order_id?: string;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;

  @BelongsTo(() => StockTransferOrderModel, {
    foreignKey: 'stock_transfer_order_id',
  })
  stock_transfer_order?: StockTransferOrderModel;

  @HasMany(() => GoodsReceiptNoteLineModel)
  goods_receipt_note_lines: GoodsReceiptNoteLineModel[];
}
