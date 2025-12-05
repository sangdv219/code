import { Column, Table, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './product.model';
import { PromotionProductModel } from './promotion-product.model';

@Table({ modelName: 'promotions' })
export class PromotionModel extends BaseModel {
    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    image_link: string;

    @Column({
        type: DataType.TEXT,
        allowNull: true,
    })
    image_link_mobile: string;

    @Column({
        type: DataType.TEXT,
    })
    color_code: string;

    @Column({
        type: DataType.TEXT,
    })
    description?: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    promotion_type: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    discount_type: string;

    @Column({
        type: DataType.INTEGER,
        defaultValue: 0,
        allowNull: false,
    })
    discount_value: integer;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    status_campaign: string;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    start_date: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    end_date: Date;

    @Column({
        type: DataType.STRING()
    })
    sub_name: string;

    @BelongsToMany(() => ProductModel, () => PromotionProductModel)
    products: ProductModel[];
}
