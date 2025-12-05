import {
  Table,
  Model,
  Column,
  PrimaryKey,
  DataType,
  Default,
  AllowNull,
  Unique,
} from 'sequelize-typescript';
import { EPlatformStatus } from '../modules/platform/enum/platform.enum';

@Table({
  tableName: 'platforms',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  indexes: [
    {
      name: 'idx_platform_filter',
      fields: ['code', 'name', 'status'],
    },
  ],
})
export class PlatformModel extends Model {
  @PrimaryKey
  @Default(DataType.UUIDV4)
  @Column(DataType.UUID)
  declare id: string;

  @Unique
  @AllowNull(false)
  @Column(DataType.STRING(50))
  declare code: string;

  @AllowNull(false)
  @Column(DataType.STRING(255))
  declare name: string;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
    field: 'created_by',
  })
  declare created_by: string;

  @AllowNull(true)
  @Column({ type: DataType.TEXT })
  declare description: string;

  @Column({
    type: DataType.STRING(20),
    defaultValue: EPlatformStatus.Active,
  })
  declare status: EPlatformStatus;
}
