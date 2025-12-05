import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LuckyWheelCampaignModel } from './lucky-wheel-campaign.model';

@Table({
  modelName: 'lucky_wheel_user_spins',
  comment: 'Bảng lưu trữ lượt quay của người dùng',
})
export class LuckyWheelUserSpinModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: 'Số lượt quay được cấp',
  })
  spins_granted: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
    comment: 'Số lượt quay đã sử dụng',
  })
  spins_used: number;

  @Column({
    type: DataType.UUID,
    allowNull: false,
    comment: 'ID người dùng',
  })
  user_id: string;

  @Column({
    type: DataType.STRING(50),
    allowNull: true,
    comment: 'Nền tảng tham gia (web/app)',
  })
  participation_platform: string;

  @ForeignKey(() => LuckyWheelCampaignModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  campaign_id: string;

  @BelongsTo(() => LuckyWheelCampaignModel, { foreignKey: 'campaign_id' })
  campaign: LuckyWheelCampaignModel;
}
