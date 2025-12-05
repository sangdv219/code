import {
  Column,
  Table,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { TikiReturnShipmentBoxModel } from './_';

@Table({ modelName: 'tiki_return_shipment_box_items' })
export class TikiReturnShipmentBoxItemModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
  })
  sku: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  quantity: number;

  @ForeignKey(() => TikiReturnShipmentBoxModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  return_box_id: string;

  @BelongsTo(() => TikiReturnShipmentBoxModel, {
    foreignKey: 'return_box_id',
  })
  return_box: TikiReturnShipmentBoxModel;
}
