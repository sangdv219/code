import {
  Table,
  Column,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { BaseModel } from '@src/common/base/_';
import { LoyaltyBannerItemModel } from './loyalty-banner-item.model';
import { LoyaltyTierModel } from './loyalty-tier.model';

@Table({ modelName: 'loyalty_banner_item_tiers' })
export class LoyaltyBannerItemTierModel extends BaseModel {
  @ForeignKey(() => LoyaltyBannerItemModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_banner_item_id: string;

  @ForeignKey(() => LoyaltyTierModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_tier_id: string;

  @BelongsTo(() => LoyaltyBannerItemModel, {
    foreignKey: 'loyalty_banner_item_id',
  })
  loyalty_banner_item: LoyaltyBannerItemModel;

  @BelongsTo(() => LoyaltyTierModel, { foreignKey: 'loyalty_tier_id' })
  loyalty_tier: LoyaltyTierModel;
}
