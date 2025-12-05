import {
  Table,
  Model,
  Column,
  PrimaryKey,
  DataType,
  Default,
  AllowNull,
  Unique,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';
import { ESaleChannelStatus } from '../modules/sales-channel/enum/sales-channel.enum';
import { PlatformModel } from './platform.model';

@Table({
  tableName: 'sales_channels',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at',
  deletedAt: 'deleted_at',
  indexes: [
    {
      name: 'idx_sale_channel_filter',
      fields: ['code', 'name', 'platform_id', 'status'],
    },
  ],
})
export class SalesChannelModel extends Model {
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

  @AllowNull(true)
  @Column(DataType.TEXT)
  declare description: string;

  @ForeignKey(() => PlatformModel)
  @AllowNull(false)
  @Column({
    type: DataType.UUID,
    field: 'platform_id',
  })
  declare platform_id: string;

  @BelongsTo(() => PlatformModel, {
    foreignKey: 'platform_id',
    as: 'platform',
  })
  declare platform: PlatformModel;

  @AllowNull(false)
  @Column({
    type: DataType.STRING(50),
    field: 'created_by',
  })
  declare created_by: string;

  @Column({
    type: DataType.STRING(20),
    defaultValue: ESaleChannelStatus.Active,
  })
  declare status: ESaleChannelStatus;
}
