import { BaseModel } from '@src/common/base/_';
import { LoyaltyPointTypeEnum } from '@src/modules/loyalty/enum/loyalty.enum';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { LoyaltyMemberModel } from './loyalty-member.model';
import { LoyaltyRewardModel } from './loyalty-reward.model';
import { LoyaltyModel } from './loyalty.model';

@Table({ modelName: 'loyalty_reward_redemptions' })
export class LoyaltyRewardRedemptionModel extends BaseModel {
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
  quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  point_reward: number;

  @Column({
    type: DataType.ENUM(...Object.values(LoyaltyPointTypeEnum)),
    allowNull: false,
  })
  point_type: LoyaltyPointTypeEnum;

  @Column({
    type: DataType.JSONB,
    allowNull: true,
  })
  receiver_info?: Record<string, any>;

  @ForeignKey(() => LoyaltyRewardModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_reward_id: string;

  @ForeignKey(() => LoyaltyMemberModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_member_id: string;

  @ForeignKey(() => LoyaltyModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_id: string;

  @BelongsTo(() => LoyaltyRewardModel, { foreignKey: 'loyalty_reward_id' })
  loyalty_reward: LoyaltyRewardModel;

  @BelongsTo(() => LoyaltyMemberModel, { foreignKey: 'loyalty_member_id' })
  loyalty_member: LoyaltyMemberModel;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;
}
