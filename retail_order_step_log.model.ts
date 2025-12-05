import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailOrderModel } from './_';

@Table({ modelName: 'retail_order_step_logs' })
export class RetailOrderStepLogModel extends BaseModel {
  @ForeignKey(() => RetailOrderModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_order_id: string;

  @Column({
    type: DataType.ENUM('on_confirm', 'complete_confirm', 'complete', 'cancel'),
    allowNull: false,
  })
  state: string;

  @BelongsTo(() => RetailOrderModel, { foreignKey: 'retail_order_id' })
  retail_order: RetailOrderModel;
}
