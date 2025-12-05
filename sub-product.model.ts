import { Column, Table, DataType, HasMany, BelongsToMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { BrandModel } from './brand.model';
import { ProductCategoryModel } from './product-category.model';
import { StockUnitModel } from './stock-unit.model';

@Table({ modelName: 'sub_products' })
export class SubProductModel extends BaseModel {
    @Column({
        type: DataType.STRING(200),
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.TEXT,
    })
    html_content: string;

    @Column({
        type: DataType.TEXT,
    })
    image_link: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    price: integer;

    @Column({
        type: DataType.INTEGER,
    })
    promotion_price: integer;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    is_freeship: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    is_published: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    })
    is_expiry_date: boolean;

    @ForeignKey(() => BrandModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    brand_id: string;

    @ForeignKey(() => ProductCategoryModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    category_id: string;

    @ForeignKey(() => StockUnitModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    stock_unit_id: string;

    @BelongsTo(() => BrandModel, { foreignKey: 'brand_id' })
    brand: BrandModel;

    @BelongsTo(() => ProductCategoryModel, { foreignKey: 'category_id' })
    category: ProductCategoryModel;

    @BelongsTo(() => StockUnitModel, { foreignKey: 'stock_unit_id' })
    stock_unit: StockUnitModel;
}
