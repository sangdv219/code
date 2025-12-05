import { Column, Table, DataType } from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';
import { LikeItemTypes } from 'src/common/constants/_';

@Table({ modelName: 'user_likes' })
export class UserLikeModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(LikeItemTypes)),
    allowNull: false,
  })
  object_type: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  object_id: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;
}
