import { Column, Table, DataType } from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';

@Table({ modelName: 'loyalty_tiers' })
export class LoyaltyTierModel extends BaseModel {
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

  @Column({ type: DataType.JSONB })
  icon_image?: Record<string, any>;

  @Column({ type: DataType.STRING(100) })
  color_code?: string;

  @Column({ type: DataType.TEXT })
  background_color?: string;

  @Column({ type: DataType.TEXT })
  background_image?: string;

  @Column({ type: DataType.JSONB })
  card_image?: Record<string, any>;

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

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;
}
