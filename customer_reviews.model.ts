import {
  BelongsTo,
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { BaseModel } from '../common/base/base.model';
import { CustomerModel } from './customer.model';
import { CustomerReviewStatusEnum } from '../modules/customer_review/enum/customer-review.enum';
import { ProductModel } from './product.model';
import { CustomerReviewMediaType } from '../modules/customer_review/type/customer-review.type';
import { OrderModel } from './order.model';

@Table({ modelName: 'customer_reviews' })
export class CustomerReviewModel extends BaseModel {
  @ForeignKey(() => CustomerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  customer_id: string;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  product_id: string;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_id: string;

  @Column({
    type: DataType.DOUBLE,
    allowNull: false,
  })
  rating_point: number;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  order: number;

  @Column({
    type: DataType.STRING(1500),
    allowNull: false,
  })
  content: string;

  @Column({
    type: DataType.ARRAY(DataType.JSONB),
    defaultValue: [],
  })
  medias: CustomerReviewMediaType[];

  @Column({
    type: DataType.ENUM({ values: Object.values(CustomerReviewStatusEnum) }),
    defaultValue: CustomerReviewStatusEnum.OFF,
  })
  status: CustomerReviewStatusEnum;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @BelongsTo(() => CustomerModel, 'customer_id')
  customer: CustomerModel;

  @BelongsTo(() => ProductModel, 'product_id')
  product: ProductModel;

  @BelongsTo(() => OrderModel, 'order_id')
  order_detail: OrderModel;
}
