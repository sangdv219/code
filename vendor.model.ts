import { Column, Table, DataType } from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
@Table({ modelName: 'vendors' })
export class VendorModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  name: string;
}
