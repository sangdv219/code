import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
  HasMany,
} from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailRolePermissionModel } from './retail_role_permission.model';
import { RetailStoreModel } from './retail_store.model';

@Table({ modelName: 'retail_roles' })
export class RetailRoleModel extends BaseModel {
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
    type: DataType.STRING(500),
  })
  description: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  @ForeignKey(() => RetailStoreModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  parent_store_id: string;

  @BelongsTo(() => RetailStoreModel, { foreignKey: 'parent_store_id' })
  parent_store: RetailStoreModel;

  @HasMany(() => RetailRolePermissionModel)
  retail_role_permissions: RetailRolePermissionModel[];
}
