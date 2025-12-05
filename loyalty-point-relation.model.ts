import { BaseModel } from '@src/common/base/_';
import { LoyaltyPointTypeEnum } from '@src/modules/loyalty/enum/loyalty.enum';
import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { LoyaltyPointModel } from './loyalty-point.model';
import { LoyaltyModel } from './loyalty.model';

@Table({ modelName: 'loyalty_point_relations' })
export class LoyaltyPointRelationModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(LoyaltyPointTypeEnum)),
    allowNull: false,
  })
  type: LoyaltyPointTypeEnum;

  @ForeignKey(() => LoyaltyPointModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_point_id: string;

  @ForeignKey(() => LoyaltyModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  loyalty_id: string;

  @BelongsTo(() => LoyaltyPointModel, { foreignKey: 'loyalty_point_id' })
  loyalty_point: LoyaltyPointModel;

  @BelongsTo(() => LoyaltyModel, { foreignKey: 'loyalty_id' })
  loyalty: LoyaltyModel;
}
