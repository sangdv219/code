import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyBannerModel } from './loyalty-banner.model';

@Table({ modelName: 'loyalty_banner_items' })
export class LoyaltyBannerItemModel extends BaseModel {
  @Column({ type: DataType.TEXT })
  web_image_link: string;

  @Column({ type: DataType.TEXT })
  app_image_link: string;

  @Column({ type: DataType.TEXT })
  web_url_link: string;

  @Column({ type: DataType.TEXT })
  app_url_link: string;

  @ForeignKey(() => LoyaltyBannerModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_banner_id: string;

  @BelongsTo(() => LoyaltyBannerModel, { foreignKey: 'loyalty_banner_id' })
  loyalty_banner: LoyaltyBannerModel;
}
