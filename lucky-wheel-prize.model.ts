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
  modelName: 'lucky_wheel_prizes',
  comment: 'Bảng lưu trữ thông phần thưởng của chương trình lucky wheel',
})
export class LuckyWheelPrizeModel extends BaseModel {
  @ForeignKey(() => LuckyWheelCampaignModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
    comment: 'ID campaign',
  })
  campaign_id: string;

  @BelongsTo(() => LuckyWheelCampaignModel)
  campaign: LuckyWheelCampaignModel;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    comment: 'Nguồn gốc quà',
  })
  source: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    comment: 'Loại quà',
  })
  type: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Thứ tự hiển thị',
  })
  display_order: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Tỉ lệ trúng thưởng',
  })
  probability: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Tổng số lượng quà',
  })
  total_quantity: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Số lượng quà còn lại',
  })
  remaining_quantity: number;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    allowNull: true,
    comment: 'Ngày áp dụng',
  })
  scheduled_dates?: string[];

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    comment: 'Giới hạn quà mỗi ngày',
  })
  daily_limit: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: true,
    comment: 'Chỉ áp dụng vào cuối tuần',
  })
  weekend_only?: boolean;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    comment: 'Link hình ảnh',
  })
  image_link?: string;

  @Column({
    type: DataType.STRING(2000),
    allowNull: false,
    comment: 'Tên quà',
  })
  name: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    comment: 'Mô tả quà',
  })
  description?: string;

  @Column({
    type: DataType.JSONB,
    allowNull: true,
    comment: 'Dữ liệu bổ sung',
  })
  extra_data?: Record<string, any>;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;
}
