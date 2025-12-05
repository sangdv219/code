import {
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  Column,
} from 'sequelize-typescript';

import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './product.model';
import { PlatformModel } from './platform.model';

@Table({ modelName: 'product_platforms' })
export class ProductPlatformModel extends BaseModel {
  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  product_id: string;

  @ForeignKey(() => PlatformModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  platform_id: string;

  @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
  product: ProductModel;

  @BelongsTo(() => PlatformModel, { foreignKey: 'platform_id' })
  platform: PlatformModel;
}
