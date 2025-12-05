import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { BundleItemTypes } from 'src/modules/bundle/enum/bundle-item.enum';
import { BundleModel } from './bundle.model';
import { ProductModel } from './product.model';

@Table({ modelName: 'bundle_items' })
export class BundleItemModel extends BaseModel {
  @ForeignKey(() => BundleModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  bundle_id: string;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  product_id: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  cost_price: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  vat: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  sale_price: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  quantity: number;

  @Column({
    type: DataType.ENUM(...Object.values(BundleItemTypes)),
    allowNull: false,
  })
  type: BundleItemTypes;

  @BelongsTo(() => BundleModel, { foreignKey: 'bundle_id' })
  bundle: BundleModel;

  @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
  product: ProductModel;
}
