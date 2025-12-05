import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import { ProductModel } from './product.model';
import { PlatformModel } from './platform.model';
import { SalesChannelModel } from './sales-channel.model';

@Table({ modelName: 'product_prices' })
export class ProductPriceModel extends BaseModel {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: integer;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  platform: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  channel: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  vat: number;

  @ForeignKey(() => ProductModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  product_id: string;

  @ForeignKey(() => PlatformModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  platform_id: string;

  @ForeignKey(() => SalesChannelModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
  })
  channel_id: string;

  @BelongsTo(() => ProductModel, { foreignKey: 'product_id' })
  product: ProductModel;

  @BelongsTo(() => PlatformModel, { foreignKey: 'platform_id' })
  platformData: PlatformModel;

  @BelongsTo(() => SalesChannelModel, { foreignKey: 'channel_id' })
  channelData: SalesChannelModel;
}
