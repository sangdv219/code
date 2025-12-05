import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { WarehouseModel } from './_';

@Table({ modelName: 'sale_channels' })
export class SaleChannelModel extends BaseModel {
  @Column({ type: DataType.STRING })
  connection_name: string;

  @Column({ type: DataType.STRING })
  sale_channel_id: string;

  @Column({ type: DataType.STRING })
  channel: string;

  @Column({ type: DataType.UUID })
  created_by_userid: string;

  @Column({ type: DataType.UUID })
  updated_by_userid: string;

  @Column({ type: DataType.BOOLEAN })
  active: boolean;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  warehouse_id: string;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;
}
