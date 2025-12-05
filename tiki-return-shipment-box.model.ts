import {
  Column,
  Table,
  DataType,
  BelongsTo,
  ForeignKey,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { TikiReturnShipmentModel } from './tiki-return-shipment.model';

@Table({ modelName: 'tiki_return_shipment_boxes' })
export class TikiReturnShipmentBoxModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
  })
  code: string;

  @Column({
    type: DataType.STRING(100),
  })
  status: string;

  @ForeignKey(() => TikiReturnShipmentModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  return_shipment_id: string;

  @BelongsTo(() => TikiReturnShipmentModel, {
    foreignKey: 'return_shipment_id',
  })
  return_shipment: TikiReturnShipmentModel;
}
