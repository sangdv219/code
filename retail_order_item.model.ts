import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasOne,
} from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { RetailProductModel } from './retail_product.model';
import { RetailOrderModel } from './retail_order.model';

@Table({ modelName: 'retail_order_items' })
export class RetailOrderItemModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: integer;

  @ForeignKey(() => RetailProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_product_id: string;

  @ForeignKey(() => RetailOrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_order_id: string;

  @BelongsTo(() => RetailProductModel, { foreignKey: 'retail_product_id' })
  retail_product: RetailProductModel;

  @BelongsTo(() => RetailOrderModel, { foreignKey: 'retail_order_id' })
  retail_order: RetailOrderModel;
}
