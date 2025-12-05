import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { OrderModel, VoucherModel } from './_';

@Table({ modelName: 'voucher_applies' })
export class VoucherApplyModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount_amount: number;

  @ForeignKey(() => VoucherModel)
  @Column({
    type: DataType.UUID,
  })
  voucher_id: string;

  @ForeignKey(() => OrderModel)
  @Column({
    type: DataType.UUID,
  })
  order_id: string;

  @Column({ type: DataType.STRING(100) })
  serial_code: string;

  @BelongsTo(() => VoucherModel, { foreignKey: 'voucher_id' })
  voucher: VoucherModel;

  @BelongsTo(() => OrderModel, { foreignKey: 'order_id' })
  order: OrderModel;
}
