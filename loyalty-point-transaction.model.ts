import { BaseModel } from '@src/common/base/_';
import { LoyaltyPointTransctionTypeEnum } from '@src/modules/loyalty/enum/loyalty.enum';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { LoyaltyMemberModel } from './loyalty-member.model';
import { LoyaltyPointModel } from './loyalty-point.model';
import { LoyaltyRewardModel } from './loyalty-reward.model';

@Table({ modelName: 'loyalty_point_transactions' })
export class LoyaltyPointTransactionModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.ENUM(...Object.values(LoyaltyPointTransctionTypeEnum)),
    allowNull: false,
  })
  type: LoyaltyPointTransctionTypeEnum;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  point_change: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  point_before: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  point_after: number;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: true,
  })
  qr_code?: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: true,
  })
  qr_type?: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: true,
  })
  order_code?: string;

  @Column({ type: DataType.UUID, allowNull: true })
  updated_by?: string;

  @ForeignKey(() => LoyaltyPointModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  loyalty_point_id: string;

  @ForeignKey(() => LoyaltyMemberModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_member_id: string;

  @ForeignKey(() => LoyaltyRewardModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  loyalty_reward_id: string;

  @BelongsTo(() => LoyaltyRewardModel, { foreignKey: 'loyalty_reward_id' })
  loyalty_reward: LoyaltyRewardModel;

  @BelongsTo(() => LoyaltyPointModel, { foreignKey: 'loyalty_point_id' })
  loyalty_point: LoyaltyPointModel;

  @BelongsTo(() => LoyaltyMemberModel, { foreignKey: 'loyalty_member_id' })
  loyalty_member: LoyaltyMemberModel;
}
