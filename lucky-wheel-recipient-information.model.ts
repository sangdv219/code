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
} from 'sequelize-typescript';
import { LuckyWheelCampaignModel } from './lucky-wheel-campaign.model';
import { ProvinceModel } from './province.model';
import { DistrictModel } from './district.model';
import { WardModel } from './ward.model';

@Table({
  tableName: 'lucky_wheel_recipient_informations',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
})
export class LuckyWheelRecipientInformationModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @ForeignKey(() => LuckyWheelCampaignModel)
  @AllowNull(false)
  @Column(DataType.UUID)
  declare campaign_id: string;

  @AllowNull(false)
  @Column(DataType.UUID)
  declare user_id: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare full_name: string;

  @AllowNull(false)
  @Column(DataType.STRING)
  declare phone_number: string;

  @ForeignKey(() => ProvinceModel)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  declare province_id: number;

  @ForeignKey(() => DistrictModel)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  declare district_id: number;

  @ForeignKey(() => WardModel)
  @AllowNull(false)
  @Column(DataType.INTEGER)
  declare ward_id: number;

  @AllowNull(false)
  @Column(DataType.TEXT)
  declare address: string;

  @BelongsTo(() => LuckyWheelCampaignModel, 'campaign_id')
  declare campaign: LuckyWheelCampaignModel;

  @BelongsTo(() => ProvinceModel, 'province_id')
  declare province: ProvinceModel;

  @BelongsTo(() => DistrictModel, 'district_id')
  declare district: DistrictModel;

  @BelongsTo(() => WardModel, 'ward_id')
  declare ward: WardModel;
}
