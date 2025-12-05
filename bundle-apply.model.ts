import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { BundleModel } from './bundle.model';
import { OrderModel } from './order.model';

@Table({ modelName: 'bundle_applies' })
export class BundleApplyModel extends BaseModel {
  @ForeignKey(() => BundleModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  bundle_id: string;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_id: string;

  @BelongsTo(() => BundleModel, { foreignKey: 'bundle_id' })
  bundle: BundleModel;

  @BelongsTo(() => OrderModel, { foreignKey: 'order_id' })
  order: OrderModel;
}
