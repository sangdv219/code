import { FaqCategoryModel } from './faq-category.model';
import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  DeletedAt,
  ForeignKey,
  BelongsTo,
  PrimaryKey,
} from 'sequelize-typescript';
@Table({
  modelName: 'faqs',
})
export class FaqModel extends Model<FaqModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => FaqCategoryModel)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category_id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  content: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @BelongsTo(() => FaqCategoryModel)
  category: FaqCategoryModel;
}
