import { BaseModel } from '@src/common/base/_';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { PlatformModel } from './platform.model';
import { SaleChannelDistributionModel } from './sale-channel-distribution.model';
import { SalesChannelModel } from './sales-channel.model';

@Table({ modelName: 'sale_channel_distribution_items' })
export class SaleChannelDistributionItemModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  sale_ratio: number;

  @ForeignKey(() => SaleChannelDistributionModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  sale_channel_distribution_id: string;

  @ForeignKey(() => PlatformModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  platform_id: string;

  @ForeignKey(() => SalesChannelModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  channel_id: string;

  @BelongsTo(() => SaleChannelDistributionModel, {
    foreignKey: 'sale_channel_distribution_id',
  })
  sale_channel_distribution: SaleChannelDistributionModel;

  @BelongsTo(() => PlatformModel, {
    foreignKey: 'platform_id',
  })
  platform: PlatformModel;

  @BelongsTo(() => SalesChannelModel, {
    foreignKey: 'channel_id',
  })
  channel: SalesChannelModel;
}
