import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyRewardCampaignModel } from './loyalty-reward-campaign.model';
import { LoyaltyRewardModel } from './loyalty-reward.model';

@Table({ modelName: 'loyalty_reward_campaign_relations' })
export class LoyaltyRewardCampaignRelationModel extends BaseModel {
  @ForeignKey(() => LoyaltyRewardModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_reward_id: string;

  @ForeignKey(() => LoyaltyRewardCampaignModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_reward_campaign_id: string;

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
  remaining_quantity: number;

  @BelongsTo(() => LoyaltyRewardModel, { foreignKey: 'loyalty_reward_id' })
  loyalty_reward: LoyaltyRewardModel;

  @BelongsTo(() => LoyaltyRewardCampaignModel, {
    foreignKey: 'loyalty_reward_campaign_id',
  })
  loyalty_reward_campaign: LoyaltyRewardCampaignModel;
}
