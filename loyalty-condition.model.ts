import { Column, Table, DataType } from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';

@Table({ modelName: 'loyalty_conditions' })
export class LoyaltyConditionModel extends BaseModel {
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

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  rules: Record<string, any>;

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

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
  })
  max_apply_per_user: number;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;
}
