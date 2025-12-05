import { Column, Table, DataType } from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';

@Table({ modelName: 'search_keywords' })
export class SearchKeywordModel extends BaseModel {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  keyword: string;

  @Column({
    type: DataType.NUMBER,
    allowNull: false,
  })
  priority: number;
}
