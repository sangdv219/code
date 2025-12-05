import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyBudgetModel } from './loyalty-budget.model';
import { LoyaltyTierRelationModel } from './loyalty-tier-relation.model';
import { LoyaltyPointRelationModel } from './loyalty-point-relation.model';
import { LoyaltyConditionRelationModel } from './loyalty-condition-relation.model';

@Table({ modelName: 'loyalties' })
export class LoyaltyModel extends BaseModel {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({ type: DataType.TEXT })
  description?: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  state: string;

  @Column({ type: DataType.TEXT })
  app_image_link?: string;

  @Column({ type: DataType.TEXT })
  faq_link?: string;

  @Column({ type: DataType.TEXT })
  policy_link?: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  platform: string;

  @ForeignKey(() => LoyaltyBudgetModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_budget_id: string;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;

  @BelongsTo(() => LoyaltyBudgetModel, { foreignKey: 'loyalty_budget_id' })
  loyalty_budget: LoyaltyBudgetModel;

  @HasMany(() => LoyaltyTierRelationModel)
  tier_items: LoyaltyTierRelationModel[];

  @HasMany(() => LoyaltyPointRelationModel)
  point_items: LoyaltyPointRelationModel[];

  @HasMany(() => LoyaltyConditionRelationModel)
  condition_items: LoyaltyConditionRelationModel[];
}
