import {
  Column,
  Table,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import {
  ProductModel,
  CustomerModel,
} from './_';

@Table({ modelName: 'faq_products' })
export class FaqProductModel extends BaseModel {
  @Column({
    type: DataType.STRING(250),
  })
  question_message: string;

  @Column({
    type: DataType.STRING(250),
  })
  answer_message: string;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  order: number;

  @Column({
    type: DataType.STRING,
  })
  question_date: string;

  @Column({
    type: DataType.STRING,
  })
  answer_date: string;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  product_id: string;

  @ForeignKey(() => CustomerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  question_customer_id: string;

  @ForeignKey(() => CustomerModel)
  @Column({
    type: DataType.UUID,
    // allowNull: false,
  })
  answer_customer_id: string;

  @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
  product: ProductModel;

  @BelongsTo(() => CustomerModel, { foreignKey: 'question_customer_id' })
  question_customer: CustomerModel;

  @BelongsTo(() => CustomerModel, { foreignKey: 'answer_customer_id' })
  answer_customer: CustomerModel;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
