import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  PrimaryKey,
  DeletedAt,
} from 'sequelize-typescript';

import * as _ from 'lodash';

@Table({
  modelName: 'staffs',
})
export class StaffModel extends Model<StaffModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
  })
  code: string;

  @Column({
    type: DataType.JSON,
  })
  personal_info: any;

  @Column({
    type: DataType.JSON,
  })
  card_info: any;

  @Column({
    type: DataType.JSON,
  })
  contract_info: any;

  @Column({
    type: DataType.TEXT,
  })
  introduction: string;

  @Column({
    type: DataType.STRING,
  })
  avatar: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone_number: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_root: boolean;

  @Column({
    type: DataType.DATE,
  })
  birthday: Date;

  @Column({
    type: DataType.UUID,
  })
  user_id: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  transformToResponse() {
    return JSON.parse(JSON.stringify(this));
    //const { user, ...rest } = detail;
    //return {
    //  ...rest,
    //  email: user?.email,
    //};
  }
}
