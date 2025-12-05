import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailRoleModel } from './retail_role.model';
import { RetailStoreModel } from './retail_store.model';
import { RetailStaffModel } from './retail_staff.model';

@Table({ modelName: 'retail_staff_role_stores' })
export class RetailStaffRoleStoreModel extends BaseModel {
  @ForeignKey(() => RetailStoreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_store_id: string;

  @ForeignKey(() => RetailStaffModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_staff_id: string;

  @ForeignKey(() => RetailRoleModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_role_id: string;

  @BelongsTo(() => RetailStoreModel, { foreignKey: 'retail_store_id' })
  children_store: RetailStoreModel;

  @BelongsTo(() => RetailStaffModel, { foreignKey: 'retail_staff_id' })
  retail_staff: RetailStaffModel;

  @BelongsTo(() => RetailRoleModel, { foreignKey: 'retail_role_id' })
  retail_role: RetailRoleModel;
}
