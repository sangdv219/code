import {
  Column,
  Table,
  DataType,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailDistributionItemModel } from './retail_distribution_item.model';
import { RetailStoreModel } from './retail_store.model';

@Table({ modelName: 'retail_distributions' })
export class RetailDistributionModel extends BaseModel {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  ascii_name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.ENUM('on_confirm', 'complete_confirm', 'complete', 'cancel'),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING(500),
  })
  description: string;

  @ForeignKey(() => RetailStoreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_store_id: string;

  @BelongsTo(() => RetailStoreModel, { foreignKey: 'retail_store_id' })
  retail_store: RetailStoreModel;

  @HasMany(() => RetailDistributionItemModel)
  retail_distribution_items: RetailDistributionItemModel[];
}
