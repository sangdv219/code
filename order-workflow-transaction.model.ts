import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { OrderWorkflowStepModel } from './_';

@Table({ modelName: 'order_workflow_transactions' })
export class OrderWorkflowTransactionModel extends BaseModel {
  @ForeignKey(() => OrderWorkflowStepModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  from_step_id: string;

  @ForeignKey(() => OrderWorkflowStepModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  to_step_id: string;

  @Column({
    type: DataType.INTEGER,
  })
  auto_time?: number;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_show_admin: boolean;

  @BelongsTo(() => OrderWorkflowStepModel, { foreignKey: 'from_step_id' })
  from_step: OrderWorkflowStepModel;

  @BelongsTo(() => OrderWorkflowStepModel, { foreignKey: 'to_step_id' })
  to_step: OrderWorkflowStepModel;
}
