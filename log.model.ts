import { Column, Table, DataType } from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';

@Table({ modelName: 'logs' })
export class LogModel extends BaseModel {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  object_type: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  object_id: string;

  @Column({
    type: DataType.JSONB,
    allowNull: false,
  })
  details: Record<string, any>;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;
}
