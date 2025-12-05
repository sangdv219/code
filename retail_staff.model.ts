import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailStaffRoleStoreModel } from './retail_staff_role_store.model';
import { RetailStoreModel } from './retail_store.model';

@Table({ modelName: 'retail_staffs' })
export class RetailStaffModel extends BaseModel {
  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  ascii_name: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  email: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.STRING(),
  })
  otp: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_otp_verified: boolean;

  @Column({
    type: DataType.INTEGER,
    defaultValue: 0,
  })
  otp_per_day: number;

  @Column({
    type: DataType.DATE,
  })
  otp_expired_at: Date;

  @ForeignKey(() => RetailStoreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  parent_store_id: string;

  @BelongsTo(() => RetailStoreModel, { foreignKey: 'parent_store_id' })
  parent_store: RetailStoreModel;

  @HasMany(() => RetailStaffRoleStoreModel)
  retail_staff_role_store: RetailStaffRoleStoreModel[];
}
