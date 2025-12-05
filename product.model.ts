import {
  Column,
  Table,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
  BelongsToMany,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { integer, float } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import {
  ProductApplyTypes,
  ProductTypes,
  ProductDisplayType,
} from 'src/common/constants/_';
import {
  BrandModel,
  GoodsModel,
  ProductCategoryModel,
  ProductMediaModel,
  ProductPriceModel,
  ProductTagModel,
  PromotionModel,
  PromotionProductModel,
  WarehouseGoodModel,
} from './_';
import { CollectionModel } from './collection.model';
import { CollectionProductModel } from './collection-product.model';
import { ProductPlatformModel } from './product-platform.model';

@Table({ modelName: 'products' })
export class ProductModel extends BaseModel {
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  is_published: boolean;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  ascii_name: string;

  @Column({
    type: DataType.ENUM(...Object.values(ProductTypes)),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.ENUM(...Object.values(ProductDisplayType)),
  })
  display_type: string;

  @Column({
    type: DataType.TEXT,
  })
  image_link: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: integer;

  @Column({
    type: DataType.TEXT,
  })
  html_content: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_sold: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_promotion: integer;

  @Column({
    type: DataType.STRING(100),
  })
  promotion_primary_text: string;

  @Column({
    type: DataType.STRING(100),
  })
  promotion_secondary_text: string;

  @Column({
    type: DataType.INTEGER,
  })
  promotion_price: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_rating: integer;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  avg_rating: float;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_freeship: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_available_quantity: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  flashsale_startdate?: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  flashsale_enddate?: Date;

  @Column({
    type: DataType.NUMBER,
    allowNull: true,
  })
  percent_discount?: number;

  @Column({
    type: DataType.NUMBER,
  })
  promotion_price_storage?: number;
  // Logic trước đã có làm FS rồi, ko remove nhưng field trước sợ gặp bug
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_campaign: boolean;

  @Column({
    type: DataType.NUMBER,
  })
  total_promotion_sold?: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  quantity_promotion_sold: integer;

  @Column({
    type: DataType.INTEGER,
  })
  b2b_price: integer;

  @Column({
    type: DataType.ENUM(...Object.values(ProductApplyTypes)),
  })
  product_apply_type: ProductApplyTypes;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  vat: number;

  @Column({ type: DataType.JSON })
  attributes: Record<string, any>;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  barcode: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_popup_ads: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: '',
  })
  lark_approval_id?: string;

  @ForeignKey(() => GoodsModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  goods_id?: string;

  @ForeignKey(() => BrandModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  brand_id: string;

  @ForeignKey(() => ProductCategoryModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  category_id: string;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
  })
  parent_id: string;

  @BelongsTo(() => GoodsModel, { foreignKey: 'goods_id' })
  goods: GoodsModel;

  @BelongsTo(() => BrandModel, { foreignKey: 'brand_id' })
  brand: BrandModel;

  @BelongsTo(() => ProductCategoryModel, { foreignKey: 'category_id' })
  category: ProductCategoryModel;

  @BelongsTo(() => ProductModel, { foreignKey: 'parent_id' })
  parent: ProductModel;

  @HasMany(() => ProductModel)
  children_items: ProductModel[];

  @HasMany(() => ProductMediaModel)
  medias: ProductMediaModel[];

  @HasMany(() => ProductTagModel)
  tags: ProductTagModel[];

  @HasMany(() => WarehouseGoodModel, {
    foreignKey: 'good_id',
    sourceKey: 'goods_id',
  })
  warehouse_good_items: WarehouseGoodModel[];

  @BelongsToMany(() => PromotionModel, () => PromotionProductModel)
  promotions: PromotionModel[];

  @BelongsToMany(() => CollectionModel, () => CollectionProductModel)
  collections: CollectionModel[];

  @HasMany(() => ProductPriceModel)
  product_prices: ProductPriceModel[];

  @HasMany(() => ProductPlatformModel)
  product_platforms: ProductPlatformModel[];

  get is_flashsale(): boolean {
    if (!this.flashsale_startdate && !this.flashsale_enddate) return false;
    const now = new Date();
    return (
      (!!this.flashsale_startdate && now >= this.flashsale_startdate) ||
      (!!this.flashsale_enddate && now <= this.flashsale_enddate)
    );
  }

  override transformToResponse() {
    const result = super.transformToResponse();
    //result.is_flashsale = this.is_flashsale;
    return result;
  }
}
