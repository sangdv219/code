import {
  Table,
  Model,
  Column,
  PrimaryKey,
  DataType,
  Default,
  AllowNull,
  Unique,
  HasMany,
} from 'sequelize-typescript';
import { LuckyWheelPrizeModel } from './lucky-wheel-prize.model';

@Table({
  tableName: 'lucky_wheel_campaigns',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class LuckyWheelCampaignModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING)
  declare code: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare name: string;

  @AllowNull(true)
  @Column(DataType.TEXT)
  declare description: string;

  @AllowNull(false)
  @Column(DataType.DATE)
  declare start_date: Date;

  @AllowNull(false)
  @Column(DataType.DATE)
  declare end_date: Date;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  declare is_active: boolean;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;

  @HasMany(() => LuckyWheelPrizeModel, 'campaign_id')
  declare prizes: LuckyWheelPrizeModel[];
}
