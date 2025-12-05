import {
  Column,
  Model,
  Table,
  DataType,
  PrimaryKey,
} from 'sequelize-typescript';

@Table({
  modelName: 'statistics',
  updatedAt: false,
  createdAt: false,
})
export class StatisticModel extends Model<StatisticModel> {
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
  key: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  category: string;

  @Column({
    type: DataType.INTEGER,
  })
  quantity: number;

  @Column({
    type: DataType.INTEGER,
  })
  value: number;

  //@Column({
  //  type: DataType.UUID,
  //})
  //product_id: string;
  //
  //@Column({
  //  type: DataType.UUID,
  //})
  //brand_id: string;

  @Column({
    type: DataType.UUID,
  })
  store_id: string;

  @Column({
    type: DataType.DATEONLY,
  })
  date: string;

  //@CreatedAt
  //created_at: Date;

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
