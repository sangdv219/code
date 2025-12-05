import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  PrimaryKey,
  DeletedAt,
  HasOne,
  BelongsToMany,
} from 'sequelize-typescript';

import * as _ from 'lodash';

@Table({
  modelName: 'address_autocompletes',
})
export class AddressAutocompleteModel extends Model<AddressAutocompleteModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  slug: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: 'provinces',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  province_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: 'districts',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  district_id: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    references: {
      model: 'wards',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  ward_id: number;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
