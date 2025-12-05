import { Column, Table, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './product.model';
import { PromotionModel } from './promotion.model';

@Table({ modelName: 'promotion_products' })
export class PromotionProductModel extends BaseModel {
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    promotion_price: integer;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    qty_coupon: integer;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    qty_discount: integer;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    max_discount: integer;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    percent_discount: integer;

    @Column({
        type: DataType.INTEGER
    })
    cache_stock: integer;

    @Column({
        type: DataType.INTEGER
    })
    position: integer;

    @ForeignKey(() => ProductModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    product_id: string;

    @ForeignKey(() => PromotionModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    promotion_id: string;

    @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
    products: ProductModel;

    @BelongsTo(() => PromotionModel, { foreignKey: 'promotion_id' })
    promotions: PromotionModel;
}
