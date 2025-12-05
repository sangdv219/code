import { Column, Table, DataType } from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';

@Table({ modelName: 'export_reports' })
export class ExportReportModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  type: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  url: string;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;
}
