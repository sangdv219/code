import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'address_search_view',
  timestamps: false,
  underscored: true,
})
export class AddressSearchViewModel extends Model<AddressSearchViewModel> {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  province_id: number;

  @Column({
    type: DataType.STRING,
  })
  province_name: string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  district_id: number;

  @Column({
    type: DataType.STRING,
  })
  district_name: string;

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  ward_id: number;

  @Column({
    type: DataType.STRING,
  })
  ward_name: string;
}
