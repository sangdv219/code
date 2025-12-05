import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { OrderWorkflowStepStartPoints } from 'src/common/constants/_';
import { OrderStateModel, OrderWorkflowModel } from './_';

@Table({ modelName: 'order_workflow_steps' })
export class OrderWorkflowStepModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(OrderWorkflowStepStartPoints)),
    allowNull: false,
  })
  start_point: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  allow_payment: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  allow_review: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  allow_user_cancel: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  allow_repurchase: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  allow_make_delivery: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_user_cancel: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_system_cancel: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_on_delivery: boolean;

  @ForeignKey(() => OrderWorkflowModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_workflow_id: string;

  @ForeignKey(() => OrderStateModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  order_state_id: string;

  @BelongsTo(() => OrderWorkflowModel, { foreignKey: 'order_workflow_id' })
  order_workflow: OrderWorkflowModel;

  @BelongsTo(() => OrderStateModel, { foreignKey: 'order_state_id' })
  order_state: OrderStateModel;
}
