import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailPermissionModel } from './retail_permission.model';
import { RetailRoleModel } from './retail_role.model';

@Table({ modelName: 'retail_role_permissions' })
export class RetailRolePermissionModel extends BaseModel {
  @ForeignKey(() => RetailPermissionModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_permission_id: string;

  @ForeignKey(() => RetailRoleModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_role_id: string;

  @BelongsTo(() => RetailPermissionModel, {
    foreignKey: 'retail_permission_id',
  })
  retail_permission: RetailPermissionModel;

  @BelongsTo(() => RetailRoleModel, { foreignKey: 'retail_role_id' })
  retail_role: RetailRoleModel;
}
