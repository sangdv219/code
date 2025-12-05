import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  DeletedAt,
  PrimaryKey,
  HasMany,
} from 'sequelize-typescript';
import { BlogModel } from './blog.model';

@Table({
  modelName: 'blog-categories',
})
export class BlogCategoryModel extends Model<BlogCategoryModel> {
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
    type: DataType.JSONB,
  })
  metadata: Record<string, any>;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @HasMany(() => BlogModel)
  blogs: BlogModel[];
}
