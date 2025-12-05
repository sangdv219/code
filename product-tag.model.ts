import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './_';

@Table({ modelName: 'product_tags' })
export class ProductTagModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  tag_name: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  ascii_name: string;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  product_id: string;

  @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
  product: ProductModel;
}
