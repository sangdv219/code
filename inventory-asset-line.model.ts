import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { WmsOrderLineModel } from 'src/modules/wms/base/wms-order-line.model';
import { InventoryAssetModel, GoodsModel } from './_';

@Table({ modelName: 'inventory_asset_lines' })
export class InventoryAssetLineModel extends WmsOrderLineModel {
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

  @ForeignKey(() => InventoryAssetModel)
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

  @BelongsTo(() => InventoryAssetModel, { foreignKey: 'parent_id' })
  inventory_asset: InventoryAssetModel;

  @BelongsTo(() => GoodsModel, { foreignKey: 'goods_id' })
  goods: GoodsModel;
}
