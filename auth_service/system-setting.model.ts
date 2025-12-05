import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  PrimaryKey,
  DeletedAt,
} from 'sequelize-typescript';

@Table({ modelName: 'system_settings' })
export class SystemSettingModel extends Model<SystemSettingModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  object_type: string;

  @Column({ type: DataType.JSONB })
  object_value: Record<string, any>;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
