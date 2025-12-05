import { BaseModel } from '@src/common/base/_';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { SaleChannelDistributionItemModel } from './sale-channel-distribution-item.model';
import { WarehouseModel } from './warehouse.model';

@Table({ modelName: 'sale_channel_distributions' })
export class SaleChannelDistributionModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date: Date;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  @Column({ type: DataType.UUID })
  created_by?: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  warehouse_id: string;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;

  @HasMany(() => SaleChannelDistributionItemModel)
  distribution_items: SaleChannelDistributionItemModel[];
}
