import {
  Table,
  Model,
  Column,
  PrimaryKey,
  DataType,
  Default,
  AllowNull,
} from 'sequelize-typescript';

@Table({
  tableName: 'lucky_wheel_campaign_missions',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
})
export class LuckyWheelCampaignMissionModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @AllowNull(false)
  @Column(DataType.UUID)
  declare lucky_wheel_campaign_id: string;

  @AllowNull(false)
  @Column(DataType.UUID)
  declare lucky_wheel_mission_id: string;
}
