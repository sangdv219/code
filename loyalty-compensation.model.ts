import { BaseModel } from '@src/common/base/_';
import { LoyaltyCompensationTypeEnum } from '@src/modules/loyalty/enum/loyalty.enum';
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
import { LoyaltyModel } from './loyalty.model';

@Table({ modelName: 'loyalty_compensations' })
export class LoyaltyCompensationModel extends BaseModel {
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

  @Column({ type: DataType.TEXT })
  note?: string;

  @Column({
    type: DataType.ENUM(...Object.values(LoyaltyCompensationTypeEnum)),
    allowNull: false,
  })
  type: LoyaltyCompensationTypeEnum;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  state: string;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;

  @ForeignKey(() => LoyaltyRewardModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  loyalty_reward_id?: string;

  @ForeignKey(() => LoyaltyPointModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  loyalty_point_id?: string;

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

  @BelongsTo(() => LoyaltyPointModel, { foreignKey: 'loyalty_point_id' })
  loyalty_point: LoyaltyPointModel;

  @BelongsTo(() => LoyaltyMemberModel, { foreignKey: 'loyalty_member_id' })
  loyalty_member: LoyaltyMemberModel;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;
}
