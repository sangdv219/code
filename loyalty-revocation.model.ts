import { BaseModel } from '@src/common/base/_';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { LoyaltyMemberModel } from './loyalty-member.model';
import { LoyaltyPointModel } from './loyalty-point.model';
import { LoyaltyModel } from './loyalty.model';

@Table({ modelName: 'loyalty_revocations' })
export class LoyaltyRevocationModel extends BaseModel {
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
    type: DataType.TEXT,
    allowNull: false,
  })
  note: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  image_link?: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: true,
  })
  transaction_code?: string;

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

  @ForeignKey(() => LoyaltyModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_id: string;

  @BelongsTo(() => LoyaltyPointModel, { foreignKey: 'loyalty_point_id' })
  loyalty_point: LoyaltyPointModel;

  @BelongsTo(() => LoyaltyMemberModel, { foreignKey: 'loyalty_member_id' })
  loyalty_member: LoyaltyMemberModel;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;
}
