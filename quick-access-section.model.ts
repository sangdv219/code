import {
  Column,
  CreatedAt,
  DataType,
  DeletedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';

@Table({
  modelName: 'quick_access_sections',
})
export class QuickAccessSectionModel extends Model<QuickAccessSectionModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Tiêu đề của section',
  })
  title: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    comment: 'Link icon của section',
  })
  icon: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Link chuyển hướng cho web của section',
  })
  web_link: string;

  @Column({
    type: DataType.STRING,
    allowNull: true,
    comment: 'Link chuyển hướng cho app của section',
  })
  app_link: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
