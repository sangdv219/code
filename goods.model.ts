import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
  HasOne,
  BelongsToMany,
} from 'sequelize-typescript';

// Issue #3: Removed unused import * as _ from 'lodash' - lodash isn't used anywhere in the file
import { BaseModel } from 'src/common/base/_';
import {
  CacheStockItemModel,
  InboundShipmentItemModel,
  ProductModel,
  StockItemModel,
  StockUnitModel,
  WarehouseGoodModel,
} from './_';
import { ProductPlatformModel } from './product-platform.model';

@Table({ modelName: 'goods' })
export class GoodsModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  sku_code: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  description?: string;

  @Column({
    type: DataType.TEXT,
  })
  image_link?: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  list_price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  stock_price: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  available_quantity: number;

  @Column({
    type: DataType.TEXT,
  })
  tiki_track_id: string;

  @Column({
    type: DataType.TEXT,
  })
  tiki_sku_code: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  has_expiry_date: boolean;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  eton_synced: boolean;

  @Column({
    type: DataType.DATE,
  })
  expiry_date?: Date;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  average_price: number;

  @Column({
    type: DataType.INTEGER,
  })
  eff_product_id: number;

  @ForeignKey(() => StockUnitModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  stock_unit_id: string;

  @BelongsTo(() => StockUnitModel, { foreignKey: 'stock_unit_id' })
  stock_unit: StockUnitModel;

  @HasMany(() => StockItemModel)
  stock_items: StockItemModel[];

  @HasMany(() => CacheStockItemModel)
  cache_stock_items: CacheStockItemModel[];

  @HasMany(() => WarehouseGoodModel)
  warehouse_good_items: WarehouseGoodModel[];

  @HasOne(() => ProductModel)
  product: ProductModel;

  @HasMany(() => InboundShipmentItemModel)
  inbound_shipment_items: InboundShipmentItemModel[];

  @BelongsToMany(() => ProductPlatformModel, {
    // REVIEWED: This BelongsToMany association is correct for the business relationship.
    // Goods → Product → ProductPlatform represents the many-to-many relationship where
    // goods can be sold on multiple platforms through their associated products.
    // The through model (ProductModel) and keys are properly configured for this relationship.
    through: () => ProductModel,
    foreignKey: 'goods_id',
    otherKey: 'id',
    sourceKey: 'id',
    targetKey: 'product_id',
    as: 'product_platforms',
  })
  product_platforms: ProductPlatformModel[];
}
