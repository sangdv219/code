import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  DeletedAt,
  PrimaryKey,
} from 'sequelize-typescript';
import { UnitStatusEnum, UnitTypeEnum } from '../modules/content/enum/unit.enum';
@Table({
  modelName: 'units',
})
export class UnitModel extends Model<UnitModel> {
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
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  code: string;

  @Column({
    type: DataType.STRING,
  })
  image: string;

  @Column({
    type: DataType.STRING,
    defaultValue: UnitStatusEnum.ACTIVE,
  })
  status: UnitStatusEnum;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  type: UnitTypeEnum;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
