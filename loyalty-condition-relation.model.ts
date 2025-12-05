import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyConditionModel } from './loyalty-condition.model';
import { LoyaltyModel } from './loyalty.model';
import { LoyaltyConditionRelationItemModel } from './loyalty-condition-relation-item.model';

@Table({ modelName: 'loyalty_condition_relations' })
export class LoyaltyConditionRelationModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  type: string;

  @ForeignKey(() => LoyaltyConditionModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_condition_id: string;

  @ForeignKey(() => LoyaltyModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_id: string;

  @BelongsTo(() => LoyaltyConditionModel, {
    foreignKey: 'loyalty_condition_id',
  })
  loyalty_condition: LoyaltyConditionModel;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;

  @HasMany(() => LoyaltyConditionRelationItemModel)
  condition_relation_items: LoyaltyConditionRelationItemModel[];
}
