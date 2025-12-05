import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { WmsOrderModel } from 'src/modules/wms/base/wms-order.model';
import { InventoryAssetModel, WarehouseModel } from './_';

@Table({ modelName: 'stock_adjusts' })
export class StockAdjustModel extends WmsOrderModel {
  @Column({
    type: DataType.STRING(500),
  })
  reason?: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  warehouse_id: string;

  @ForeignKey(() => InventoryAssetModel)
  @Column({
    type: DataType.UUID,
  })
  inventory_asset_id?: string;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;

  @BelongsTo(() => InventoryAssetModel, { foreignKey: 'inventory_asset_id' })
  inventory_asset?: InventoryAssetModel;
}
