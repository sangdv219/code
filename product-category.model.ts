import { Column, Table, DataType, HasMany } from 'sequelize-typescript';

import * as _ from 'lodash';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './_';

@Table({ modelName: 'product_categories' })
export class ProductCategoryModel extends BaseModel {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  image_link: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_promotion: integer;

  @Column({
    type: DataType.INTEGER,
  })
  position: integer;

  @HasMany(() => ProductModel)
  products: ProductModel[];

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  code: string;
}
