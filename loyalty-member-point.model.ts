import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyPointModel } from './loyalty-point.model';
import { LoyaltyMemberModel } from './loyalty-member.model';

@Table({ modelName: 'loyalty_member_points' })
export class LoyaltyMemberPointModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_point: number;

  @ForeignKey(() => LoyaltyPointModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_point_id: string;

  @ForeignKey(() => LoyaltyMemberModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_member_id: string;

  @BelongsTo(() => LoyaltyPointModel, { foreignKey: 'loyalty_point_id' })
  loyalty_point: LoyaltyPointModel;

  @BelongsTo(() => LoyaltyMemberModel, { foreignKey: 'loyalty_member_id' })
  loyalty_member: LoyaltyMemberModel;
}
