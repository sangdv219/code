import {
  Table,
  Model,
  Column,
  PrimaryKey,
  DataType,
  Default,
  AllowNull,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
} from 'sequelize-typescript';
import { LuckyWheelCampaignModel } from './lucky-wheel-campaign.model';

@Table({
  tableName: 'lucky_wheel_campaign_activities',
  timestamps: true,
})
export class LuckyWheelCampaignActivityModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @ForeignKey(() => LuckyWheelCampaignModel)
  @AllowNull(false)
  @Column(DataType.UUID)
  declare campaign_id: string;

  @BelongsTo(() => LuckyWheelCampaignModel)
  declare campaign: LuckyWheelCampaignModel;

  @AllowNull(false)
  @Column(DataType.UUID)
  declare user_id: string;

  @AllowNull(false)
  @Column(DataType.STRING(100))
  declare activity_type: string;

  @AllowNull(true)
  @Column(DataType.UUID)
  declare reference_id: string;

  @AllowNull(true)
  @Column(DataType.JSONB)
  declare metadata: Record<string, any>;

  @AllowNull(false)
  @Default(false)
  @Column(DataType.BOOLEAN)
  declare is_confirmed: boolean;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
