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
import { InventoryAssetLineModel, StockAdjustModel, WarehouseModel } from './_';

@Table({ modelName: 'inventory_assets' })
export class InventoryAssetModel extends WmsOrderModel {
  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  warehouse_id: string;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;

  @HasMany(() => StockAdjustModel)
  stock_adjusts: StockAdjustModel[];

  @HasMany(() => InventoryAssetLineModel)
  inventory_asset_lines: InventoryAssetLineModel[];
}
