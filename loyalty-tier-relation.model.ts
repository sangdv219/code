import { BaseModel } from '@src/common/base/_';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { LoyaltyTierModel } from './loyalty-tier.model';
import { LoyaltyModel } from './loyalty.model';

@Table({ modelName: 'loyalty_tier_relations' })
export class LoyaltyTierRelationModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  rank_up: number;

  @ForeignKey(() => LoyaltyTierModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_tier_id: string;

  @ForeignKey(() => LoyaltyModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_id: string;

  @BelongsTo(() => LoyaltyTierModel, { foreignKey: 'loyalty_tier_id' })
  loyalty_tier: LoyaltyTierModel;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;
}
