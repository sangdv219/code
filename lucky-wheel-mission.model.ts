import { Column, Table, DataType } from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';

@Table({
  modelName: 'lucky_wheel_missions',
  comment: 'Bảng lưu trữ các nhiệm vụ quay số may',
})
export class LuckyWheelMissionModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    comment: 'Khóa nhiệm vụ',
  })
  key: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    comment: 'icon nhiệm vụ',
  })
  icon: string;

  @Column({
    type: DataType.STRING(1000),
    allowNull: true,
    comment: 'Tiêu đề nhiệm vụ',
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    comment: 'Mô tả nhiệm vụ',
  })
  description: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
    comment: 'Màn hình liên kết nhiệm vụ',
  })
  screen_uri: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
    comment: 'Phần thưởng nhiệm vụ',
  })
  prizes: Record<string, any>;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
    comment: 'Giới hạn nhiệm vụ',
  })
  task_limit: string;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @Column({ type: DataType.UUID })
  updated_by?: string;

  @Column({ type: DataType.UUID })
  reviewed_by?: string;

  @Column({ type: DataType.DATE })
  reviewed_at?: string;
}
