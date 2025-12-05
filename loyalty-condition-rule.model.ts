import { Column, Table, DataType } from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';

@Table({ modelName: 'loyalty_condition_rules' })
export class LoyaltyConditionRuleModel extends BaseModel {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  key: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING(500)),
    allowNull: false,
  })
  comparisons: string[];

  @Column({ type: DataType.ARRAY(DataType.STRING(500)) })
  values: string[];
}
