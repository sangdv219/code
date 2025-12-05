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
import { BlogCategoryModel } from './blog-category.model';

@Table({
  modelName: 'blogs',
})
export class BlogModel extends Model<BlogModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @ForeignKey(() => BlogCategoryModel)
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category_id: string;

  @Column({
    type: DataType.TEXT,
  })
  slug: string;

  @Column({
    type: DataType.TEXT,
  })
  title: string;

  @Column({
    type: DataType.TEXT,
  })
  short_des: string;

  @Column({
    type: DataType.TEXT,
  })
  description: string;

  @Column({
    type: DataType.TEXT,
  })
  image: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_published: boolean;

  @Column({
    type: DataType.JSONB,
  })
  metadata: Record<string, any>;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @BelongsTo(() => BlogCategoryModel)
  category: BlogCategoryModel;
}
