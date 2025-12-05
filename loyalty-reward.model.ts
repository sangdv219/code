import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import {
  LoyaltyRewardMethodEnum,
  LoyaltyRewardTypeEnum,
} from '@src/modules/loyalty/enum/loyalty.enum';
import { VoucherModel } from './voucher.model';
import { LoyaltyRewardCampaignRelationModel } from './loyalty-reward-campaign-relation.model';

@Table({ modelName: 'loyalty_rewards' })
export class LoyaltyRewardModel extends BaseModel {
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

  @Column({ type: DataType.TEXT })
  description?: string;

  @Column({ type: DataType.TEXT })
  reward_instruction?: string;

  @Column({ type: DataType.JSONB })
  image?: Record<string, any>;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  reward_point: number;

  @Column({
    type: DataType.ENUM(...Object.values(LoyaltyRewardMethodEnum)),
    allowNull: true,
  })
  reward_method: LoyaltyRewardMethodEnum;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.ENUM(...Object.values(LoyaltyRewardTypeEnum)),
    allowNull: false,
  })
  type: LoyaltyRewardTypeEnum;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  state: string;

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
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  max_apply_per_user: number;

  @ForeignKey(() => VoucherModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  voucher_id?: string;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;

  @BelongsTo(() => VoucherModel, {
    foreignKey: 'voucher_id',
  })
  voucher: VoucherModel;

  @HasMany(() => LoyaltyRewardCampaignRelationModel)
  loyalty_reward_campaing_relations: LoyaltyRewardCampaignRelationModel[];
}
