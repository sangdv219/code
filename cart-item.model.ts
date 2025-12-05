import { Column, Table, DataType } from 'sequelize-typescript';

import * as _ from 'lodash';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { OrderItemTypes, RoleTypeEnum } from 'src/common/constants/_';

@Table({ modelName: 'cart_items' })
export class CartItemModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(OrderItemTypes)),
    allowNull: false,
  })
  object_type: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  object_id: string;

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

  @Column({
    type: DataType.ENUM(...Object.values(RoleTypeEnum)),
  })
  type: RoleTypeEnum;

  @Column({
    type: DataType.STRING,
  })
  warehouse_code: string;
}
