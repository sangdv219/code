import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { RetailProductModel } from './retail_product.model';
import { RetailStoreModel } from './retail_store.model';
import { RetailDistributionModel } from './retail_distribution.model';

@Table({ modelName: 'retail_distribution_items' })
export class RetailDistributionItemModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: integer;

  @ForeignKey(() => RetailDistributionModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_distribution_id: string;

  @ForeignKey(() => RetailProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_product_id: string;

  @ForeignKey(() => RetailStoreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_store_id: string;

  @ForeignKey(() => RetailStoreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  from_retail_store_id: string;

  @BelongsTo(() => RetailDistributionModel, {
    foreignKey: 'retail_distribution_id',
  })
  retail_distribution: RetailDistributionModel;

  @BelongsTo(() => RetailProductModel, { foreignKey: 'retail_product_id' })
  retail_product: RetailProductModel;

  @BelongsTo(() => RetailStoreModel, { foreignKey: 'retail_store_id' })
  retail_store: RetailStoreModel;

  @BelongsTo(() => RetailStoreModel, { foreignKey: 'from_retail_store_id' })
  from_retail_store: RetailStoreModel;
}
