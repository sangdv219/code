import { Column, Table, DataType, HasMany } from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { RetailPermissionModel } from './retail_permission.model';

@Table({ modelName: 'retail_permission_groups' })
export class RetailPermissionGroupModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  @HasMany(() => RetailPermissionModel)
  retail_permissions: RetailPermissionModel[];
}
