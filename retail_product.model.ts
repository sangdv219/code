import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { integer } from 'aws-sdk/clients/cloudfront';
import { RetailStoreModel } from './retail_store.model';
import { ProductModel } from './product.model';
import { RetailOrderItemModel } from './retail_order_item.model';

@Table({ modelName: 'retail_products' })
export class RetailProductModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  stock: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  available_quantity: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  sellable_quantity: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  retail_price: integer;

  @Column({
    type: DataType.INTEGER,
  })
  commission: integer;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_published: boolean;

  @Column({ type: DataType.JSONB })
  product_info: Record<string, any>;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  origin_price: integer;

  @ForeignKey(() => RetailStoreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_store_id: string;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  product_id: string;

  @BelongsTo(() => RetailStoreModel, 'retail_store_id')
  retail_store: RetailStoreModel;

  @BelongsTo(() => ProductModel, 'product_id')
  product: ProductModel;

  @HasMany(() => RetailOrderItemModel)
  retail_order_items: RetailOrderItemModel;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
