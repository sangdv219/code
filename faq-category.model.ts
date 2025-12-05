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
import { FaqModel } from './faq.model';
@Table({
  modelName: 'faq-categories',
})
export class FaqCategoryModel extends Model<FaqCategoryModel> {
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

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @HasMany(() => FaqModel)
  faqs: FaqModel[];
}
