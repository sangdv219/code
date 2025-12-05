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
@Table({
  modelName: 'contacts',
})
export class ContactModel extends Model<ContactModel> {
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
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  value: string;

  @Column({
    type: DataType.STRING,
  })
  icon: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;
}
