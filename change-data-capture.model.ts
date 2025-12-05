import { Column, Table, DataType } from 'sequelize-typescript';

import { BaseModel } from 'src/common/base/_';

@Table({ modelName: 'change_data_captures' })
export class ChangeDataCapture extends BaseModel {
  @Column({ type: DataType.UUID })
  object_id: string;

  @Column({ type: DataType.STRING })
  object_type: string;

  @Column({ type: DataType.JSONB })
  object_data: Record<string, any>;

  @Column({ type: DataType.STRING })
  request_status: string;

  @Column({ type: DataType.STRING })
  note: string;

  @Column({ type: DataType.STRING })
  notification_email: string;

  @Column({ type: DataType.STRING })
  apply_status: string;

  @Column({ type: DataType.STRING })
  action_type: string;

  @Column({ type: DataType.UUID })
  created_by: string;

  @Column({ type: DataType.UUID })
  updated_by: string;

  @Column({ type: DataType.UUID })
  reviewed_by: string;

  @Column({ type: DataType.DATE })
  reviewed_at: Date;
}
