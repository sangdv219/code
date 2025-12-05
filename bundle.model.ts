import { Column, Table, DataType, HasMany } from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import {
  BundlePlatforms,
  BundleTypes,
} from 'src/modules/bundle/enum/bundle.enum';
import { BundleApplyModel } from './bundle-apply.model';
import { BundleItemModel } from './bundle-items.model';

@Table({ modelName: 'bundles' })
export class BundleModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  start_date: Date;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  end_date: Date;

  @Column({
    type: DataType.ENUM(...Object.values(BundleTypes)),
    allowNull: false,
  })
  type: BundleTypes;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  max_apply: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  max_apply_per_user: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_apply: number;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  status: boolean;

  @Column({
    type: DataType.ENUM(...Object.values(BundlePlatforms)),
    allowNull: false,
  })
  platform: BundlePlatforms;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  warehouse_code: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  created_user_id: string;

  @HasMany(() => BundleItemModel)
  bundle_items: BundleItemModel[];

  @HasMany(() => BundleApplyModel)
  bundle_applies: BundleApplyModel[];
}
