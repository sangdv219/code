import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { OrderModel } from './order.model';
import { AffiliateStateEnum } from 'src/modules/affiliate/affiliate.enum';

@Table({ modelName: 'affiliates' })
export class AffiliateModel extends BaseModel {
  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  request: Record<string, any>;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  response: Record<string, any>;

  @Column({
    type: DataType.ENUM(...Object.values(AffiliateStateEnum)),
  })
  state: AffiliateStateEnum;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_id: string;

  @BelongsTo(() => OrderModel, 'order_id')
  order: OrderModel;
}
