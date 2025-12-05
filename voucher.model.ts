import { Column, Table, DataType, HasMany } from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import {
  RoleTypeEnum,
  VoucherDiscountTypes,
  VoucherDiscountValueTypes,
  VoucherStates,
  VoucherTypes,
} from 'src/common/constants/_';
import { VoucherRequirementModel } from './_';

@Table({ modelName: 'vouchers' })
export class VoucherModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.ENUM(...Object.values(VoucherStates)),
    allowNull: false,
  })
  state: VoucherStates;

  @Column({
    type: DataType.ENUM(...Object.values(VoucherTypes)),
    allowNull: false,
  })
  type: VoucherTypes;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  image_link: string;

  @Column({
    type: DataType.STRING(1000),
  })
  description: string;

  @Column({
    type: DataType.DATE,
  })
  start_date: Date;

  @Column({
    type: DataType.DATE,
  })
  end_date: Date;

  @Column({
    type: DataType.ENUM(...Object.values(VoucherDiscountTypes)),
    allowNull: false,
  })
  discount_type: VoucherDiscountTypes;

  @Column({
    type: DataType.ENUM(...Object.values(VoucherDiscountValueTypes)),
    allowNull: false,
  })
  discount_value_type: VoucherDiscountValueTypes;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  discount_value: number;

  @Column({
    type: DataType.INTEGER,
  })
  max_discount_amount: number;

  @Column({
    type: DataType.INTEGER,
  })
  require_provisional_amount: number;

  @Column({
    type: DataType.INTEGER,
  })
  max_apply: number;

  @Column({
    type: DataType.INTEGER,
  })
  max_apply_per_user: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_apply: number;

  @Column({
    type: DataType.TEXT,
  })
  url: string;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  serial_url?: string;

  @Column({
    type: DataType.UUID,
  })
  created_by: string;

  @Column({
    type: DataType.UUID,
  })
  updated_by: string;

  @Column({
    type: DataType.UUID,
  })
  reviewed_by: string;

  @Column({
    type: DataType.DATE,
  })
  reviewed_at: Date;

  // Changed from ENUM to STRING for CDC compatibility with dynamic external types
  // Migration: existing enum values auto-convert to strings. Service layer validates input.
  @Column({
    type: DataType.STRING(200),
  })
  voucher_apply_type?: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_private: boolean;

  @Column({
    type: DataType.STRING(100),
    defaultValue: 'NORMAL',
  })
  voucher_kind: string;

  @HasMany(() => VoucherRequirementModel)
  voucher_requirements: VoucherRequirementModel[];
}
