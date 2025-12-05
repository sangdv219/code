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
  GoodsIssueNoteModel,
  GoodsReceiptNoteModel,
  StockTransferOrderLineModel,
  WarehouseModel,
} from './_';

@Table({ modelName: 'stock_transfer_orders' })
export class StockTransferOrderModel extends WmsOrderModel {
  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  issue_warehouse_id: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  receive_warehouse_id: string;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'issue_warehouse_id' })
  issue_warehouse: WarehouseModel;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'receive_warehouse_id' })
  receive_warehouse: WarehouseModel;

  @HasMany(() => GoodsIssueNoteModel)
  goods_issue_notes: GoodsIssueNoteModel[];

  @HasMany(() => GoodsReceiptNoteModel)
  goods_receipt_notes: GoodsReceiptNoteModel[];

  @HasMany(() => StockTransferOrderLineModel)
  stock_transfer_order_lines: StockTransferOrderLineModel[];
}
