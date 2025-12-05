import { Column, Table, DataType, BelongsToMany } from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './product.model';
import { CollectionProductModel } from './collection-product.model';
import { RoleTypeEnum } from 'src/common/constants/role-types';

@Table({ modelName: 'collections' })
export class CollectionModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  position: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  total_product: integer;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  status: boolean;

  @Column({
    type: DataType.STRING(),
  })
  sub_name: string;

  @Column({
    type: DataType.ENUM(...Object.values(RoleTypeEnum)),
  })
  type: RoleTypeEnum;

  @Column({
    type: DataType.STRING(),
    allowNull: false,
    defaultValue: 'SHOW',
  })
  display_type: string;

  @Column({ type: DataType.JSONB })
  banner_info: Record<string, any>;

  @Column({ type: DataType.JSONB })
  url_info: Record<string, any>;

  @Column({ type: DataType.STRING(100) })
  color_code: string;

  @BelongsToMany(() => ProductModel, () => CollectionProductModel)
  products: ProductModel[];
}
