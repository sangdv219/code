import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyModel } from './loyalty.model';
import { LoyaltyRewardCampaignRelationModel } from './loyalty-reward-campaign-relation.model';

@Table({ modelName: 'loyalty_reward_campaigns' })
export class LoyaltyRewardCampaignModel extends BaseModel {
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
    type: DataType.DATE,
    allowNull: false,
  })
  start_date: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date: Date;

  @Column({ type: DataType.TEXT })
  description?: string;

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

  @ForeignKey(() => LoyaltyModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_id: string;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;

  @HasMany(() => LoyaltyRewardCampaignRelationModel)
  reward_campain_relations: LoyaltyRewardCampaignRelationModel[];
}
