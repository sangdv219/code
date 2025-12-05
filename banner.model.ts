import { EBannerDisplayCondition, ESystemPlatform } from '@src/common/enum/_';
import { IBannerDisplayConditionData } from '@src/common/interfaces/banner.interface';
import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { RoleTypeEnum } from 'src/common/constants/role-types';
import { BannerPositionEnum } from 'src/modules/banner/enum/banner.enum';
import { PlatformModel } from './platform.model';

@Table({
  modelName: 'banners',
})
export class BannerModel extends Model<BannerModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  media: string;

  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
  })
  priority: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  url: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_published: boolean;

  @Column({
    type: DataType.ENUM(...Object.values(BannerPositionEnum)),
    defaultValue: 'HOME',
  })
  position: string;

  @Column({
    type: DataType.ENUM(...Object.values(RoleTypeEnum)),
  })
  type: RoleTypeEnum;

  @Column({
    type: DataType.STRING(255),
  })
  name: string;

  @Column({
    type: DataType.STRING(100),
  })
  color_code: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    unique: true,
  })
  code: string;

  // Issue #3: Keeping platform field for backward compatibility during migration phase
  // TODO: Remove this field after confirming all systems use platform_id
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  platform: string;

  @ForeignKey(() => PlatformModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  platform_id: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  start_date: Date;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  end_date: Date;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: true,
  })
  is_active: boolean;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    defaultValue: null,
  })
  display_condition: EBannerDisplayCondition;

  @Column({
    type: DataType.JSON,
    defaultValue: {},
  })
  display_condition_data: IBannerDisplayConditionData;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  created_by: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @BelongsTo(() => PlatformModel)
  platform_relation: PlatformModel;
}
