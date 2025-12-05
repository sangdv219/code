import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { VoucherRequirementObjectTypes } from 'src/common/constants/_';
import { VoucherModel } from './_';

@Table({ modelName: 'voucher_requirements' })
export class VoucherRequirementModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(VoucherRequirementObjectTypes)),
    allowNull: false,
  })
  object_type: VoucherRequirementObjectTypes;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  object_id: string;

  @ForeignKey(() => VoucherModel)
  @Column({
    type: DataType.UUID,
  })
  voucher_id: string;

  @BelongsTo(() => VoucherModel, { foreignKey: 'voucher_id' })
  voucher: VoucherModel;
}
