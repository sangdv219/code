import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import {
  OrderModel,
  OrderWorkflowStepModel,
  TikiDeliveryOrderModel,
} from './_';

@Table({ modelName: 'order_step_logs' })
export class OrderStepLogModel extends BaseModel {
  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_id: string;

  @ForeignKey(() => OrderWorkflowStepModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  step_id: string;

  @Column({
    type: DataType.UUID,
  })
  created_by: string;

  @ForeignKey(() => TikiDeliveryOrderModel)
  @Column({
    type: DataType.UUID,
  })
  delivery_order_id: string;

  @BelongsTo(() => OrderModel, { foreignKey: 'order_id' })
  order: OrderModel;

  @BelongsTo(() => OrderWorkflowStepModel, { foreignKey: 'step_id' })
  step: OrderWorkflowStepModel;

  @BelongsTo(() => TikiDeliveryOrderModel, { foreignKey: 'delivery_order_id' })
  delivery_order: TikiDeliveryOrderModel;
}
