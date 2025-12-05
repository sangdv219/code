import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyConditionRelationModel } from './loyalty-condition-relation.model';

@Table({ modelName: 'loyalty_condition_relation_items' })
export class LoyaltyConditionRelationItemModel extends BaseModel {
  @ForeignKey(() => LoyaltyConditionRelationModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_condition_relation_id: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  point_value: number;

  @Column({
    type: DataType.STRING(500),
    allowNull: false,
  })
  value: string;

  @BelongsTo(() => LoyaltyConditionRelationModel, {
    foreignKey: 'loyalty_condition_relation_id',
  })
  loyalty_condition_relation: LoyaltyConditionRelationModel;
}
