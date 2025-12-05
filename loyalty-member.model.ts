import { BaseModel } from '@src/common/base/_';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { CustomerModel } from './customer.model';
import { LoyaltyMemberPointModel } from './loyalty-member-point.model';
import { LoyaltyTierModel } from './loyalty-tier.model';
import { LoyaltyModel } from './loyalty.model';

@Table({ modelName: 'loyalty_members' })
export class LoyaltyMemberModel extends BaseModel {
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
  rank_point: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  reward_point: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;

  @ForeignKey(() => LoyaltyModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_id: string;

  @ForeignKey(() => LoyaltyTierModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  loyalty_tier_id: string;

  @ForeignKey(() => CustomerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  customer_id: string;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;

  @BelongsTo(() => LoyaltyTierModel, { foreignKey: 'loyalty_tier_id' })
  loyalty_tier: LoyaltyTierModel;

  @BelongsTo(() => CustomerModel, { foreignKey: 'customer_id' })
  customer: CustomerModel;

  @HasMany(() => LoyaltyMemberPointModel)
  member_points: LoyaltyMemberPointModel[];
}
