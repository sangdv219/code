import { BaseModel } from '@src/common/base/_';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { LoyaltyConditionModel } from './loyalty-condition.model';
import { LoyaltyMemberModel } from './loyalty-member.model';

@Table({ modelName: 'loyalty_member_condition_applies' })
export class LoyaltyMemberConditionApplyModel extends BaseModel {
  @ForeignKey(() => LoyaltyMemberModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_member_id: string;

  @ForeignKey(() => LoyaltyConditionModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_condition_id: string;

  @BelongsTo(() => LoyaltyConditionModel, {
    foreignKey: 'loyalty_condition_id',
  })
  loyalty_condition: LoyaltyConditionModel;

  @BelongsTo(() => LoyaltyMemberModel, { foreignKey: 'loyalty_member_id' })
  loyalty_member: LoyaltyMemberModel;
}
