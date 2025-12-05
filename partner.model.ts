import { Column, Table, DataType, HasMany, BelongsToMany } from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';

@Table({ modelName: 'partners' })
export class PartnerModel extends BaseModel {
    @Column({
        type: DataType.STRING(100),
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phone_number: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    address: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.TEXT,
        allowNull: false,
    })
    source: string;
}
