import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailPermissionGroupModel } from './retail_permission_group.model';
import { RetailRolePermissionModel } from './retail_role_permission.model';

@Table({ modelName: 'retail_permissions' })
export class RetailPermissionModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(500),
  })
  description: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  action: string;

  @ForeignKey(() => RetailPermissionGroupModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  retail_permission_group_id: string;

  @BelongsTo(() => RetailPermissionGroupModel, {
    foreignKey: 'retail_permission_group_id',
  })
  retail_permission_group: RetailPermissionGroupModel;

  @HasMany(() => RetailRolePermissionModel)
  retail_role_permissions: RetailRolePermissionModel[];
}
