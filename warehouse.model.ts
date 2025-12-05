import {
  Column,
  Table,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import {
  CacheStockItemModel,
  DistrictModel,
  GoodsIssueNoteModel,
  GoodsReceiptNoteModel,
  ProvinceModel,
  StockItemModel,
  WardModel,
} from './_';

@Table({ modelName: 'warehouses' })
export class WarehouseModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(100),
  })
  vendor_code: string;

  @Column({
    type: DataType.STRING,
  })
  address: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  default_for_auto: boolean;

  @Column({ type: DataType.STRING() })
  display_name: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_sellable: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_sellable_b2b2c: boolean;

  @HasMany(() => StockItemModel)
  stock_items: StockItemModel[];

  @HasMany(() => CacheStockItemModel)
  cache_stock_items: CacheStockItemModel[];

  @HasMany(() => GoodsIssueNoteModel)
  goods_issue_notes: GoodsIssueNoteModel[];

  @HasMany(() => GoodsReceiptNoteModel)
  goods_receipt_notes: GoodsReceiptNoteModel[];

  @ForeignKey(() => ProvinceModel)
  @Column({ type: DataType.INTEGER })
  province_id: number;

  @ForeignKey(() => DistrictModel)
  @Column({ type: DataType.INTEGER })
  district_id: number;

  @ForeignKey(() => WardModel)
  @Column({ type: DataType.INTEGER })
  ward_id: number;

  @BelongsTo(() => ProvinceModel)
  province: ProvinceModel;

  @BelongsTo(() => DistrictModel)
  district: DistrictModel;

  @BelongsTo(() => WardModel)
  ward: WardModel;
}
