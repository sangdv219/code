import { Column, Table, DataType, HasMany } from 'sequelize-typescript';
import { integer, float } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './_';

@Table({ modelName: 'brands' })
export class BrandModel extends BaseModel {
  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(30),
    allowNull: true,
  })
  parent_code?: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  ascii_name: string;

  @Column({
    type: DataType.STRING(5000),
  })
  description: string;

  @Column({
    type: DataType.TEXT,
  })
  image_link: string;

  @Column({
    type: DataType.TEXT,
  })
  banner_link: string;

  @Column({
    type: DataType.TEXT,
  })
  banner_desktop_link: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_verified: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_product: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_rating: integer;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  avg_rating: float;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  is_app_visible: boolean;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  is_web_visible: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: null, // NULL means auto-assign to end
  })
  display_order: number;

  @Column({ type: DataType.JSONB })
  banner_info: Record<string, any>;

  @Column({
    type: DataType.TEXT,
    allowNull: true,
  })
  main_product_image_url: string;

  @HasMany(() => ProductModel)
  products: ProductModel[];
}
