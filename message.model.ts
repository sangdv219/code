import {
  Column,
  Table,
  DataType,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './product.model';
import { CustomerModel } from './customer.model';
import { BrandModel } from './brand.model';

@Table({ modelName: 'messages' })
export class MessageModel extends BaseModel {
  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  html_content: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_like: integer;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_published: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_admin_answer: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_answered: boolean;

  @Column({
    type: DataType.ENUM('ANSWER', 'QUESTION'),
  })
  message_type: string;

  @Column({
    type: DataType.UUID,
  })
  reply_to_message_id: string;

  @Column({
    type: DataType.UUID,
  })
  product_id: string;

  @Column({
    type: DataType.UUID,
  })
  brand_id: string;

  @Column({
    type: DataType.UUID,
  })
  customer_id: string;

  @BelongsTo(() => CustomerModel, 'customer_id')
  customer: CustomerModel;

  @BelongsTo(() => ProductModel, 'product_id')
  product: ProductModel;

  @BelongsTo(() => BrandModel, 'brand_id')
  brand: BrandModel;

  @HasMany(() => MessageModel, 'reply_to_message_id')
  answers: MessageModel[];
}
