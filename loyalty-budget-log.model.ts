import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyBudgetModel } from './loyalty-budget.model';
import { LoyaltyModel } from './loyalty.model';

@Table({ modelName: 'loyalty_budget_logs' })
export class LoyaltyBudgetLogModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_amount: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_point: number;

  @Column({
    type: DataType.STRING(500),
    allowNull: false,
  })
  customer_name: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  customer_phone: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING(200),
    defaultValue: 'EXCLUDE',
    allowNull: false,
  })
  type: string;

  @ForeignKey(() => LoyaltyBudgetModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_budget_id: string;

  @ForeignKey(() => LoyaltyModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_id: string;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;

  @BelongsTo(() => LoyaltyBudgetModel, { foreignKey: 'loyalty_budget_id' })
  loyalty_budget: LoyaltyBudgetModel;
}
