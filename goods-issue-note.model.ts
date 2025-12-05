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
  GoodsIssueNoteLineModel,
  StockTransferOrderModel,
  TikiDeliveryOrderModel,
  WarehouseModel,
} from './_';

@Table({ modelName: 'goods_issue_notes' })
export class GoodsIssueNoteModel extends WmsOrderModel {
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

  @ForeignKey(() => TikiDeliveryOrderModel)
  @Column({
    type: DataType.UUID,
  })
  tiki_delivery_order_id?: string;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;

  @BelongsTo(() => StockTransferOrderModel, {
    foreignKey: 'stock_transfer_order_id',
  })
  stock_transfer_order?: StockTransferOrderModel;

  @BelongsTo(() => TikiDeliveryOrderModel, {
    foreignKey: 'tiki_delivery_order_id',
  })
  tiki_delivery_order?: TikiDeliveryOrderModel;

  @HasMany(() => GoodsIssueNoteLineModel)
  goods_issue_note_lines: GoodsIssueNoteLineModel[];
}
