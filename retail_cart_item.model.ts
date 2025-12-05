import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/base.model';
import { integer } from 'aws-sdk/clients/cloudfront';
import { RetailProductModel } from './retail_product.model';

@Table({
  modelName: 'retail_cart_items',
})
export class RetailCartItemModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: integer;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;

  @ForeignKey(() => RetailProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_product_id: string;

  @BelongsTo(() => RetailProductModel, 'retail_product_id')
  retail_product: RetailProductModel;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
