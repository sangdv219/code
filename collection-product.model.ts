import { Column, Table, DataType, HasMany, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './product.model';
import { CollectionModel } from './collection.model';

@Table({ modelName: 'collection_products' })
export class CollectionProductModel extends BaseModel {
    @ForeignKey(() => ProductModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    product_id: string;

    @ForeignKey(() => CollectionModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    collection_id: string;

    @Column({
        type: DataType.INTEGER
    })
    position: integer;

    @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
    products: ProductModel;

    @BelongsTo(() => CollectionModel, { foreignKey: 'collection_id' })
    collections: CollectionModel;
}
