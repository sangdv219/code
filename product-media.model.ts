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
import { integer } from 'aws-sdk/clients/cloudfront';

@Table({ modelName: 'product_medias' })
export class ProductMediaModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
  })
  mime_type: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  image_link: string;

  @Column({
    type: DataType.INTEGER,
  })
  position: integer;

  @Column({
    type: DataType.ENUM('B2B', 'B2C'),
  })
  type: string;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  product_id: string;

  @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
  product: ProductModel;
}
