import {
  Column,
  Model,
  Table,
  CreatedAt,
  UpdatedAt,
  DataType,
  PrimaryKey,
  DeletedAt,
  HasOne,
  BelongsToMany,
  HasMany,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { CustomerAddressModel } from './customer_address.model';
import { SellerModel } from './seller.model';

@Table({
  modelName: 'customers',
})
export class CustomerModel extends Model<CustomerModel> {
  @PrimaryKey
  @Column({
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  name: string;

  @Column({
    type: DataType.TEXT,
  })
  first_name: string;

  @Column({
    type: DataType.TEXT,
  })
  last_name: string;

  @Column({
    type: DataType.STRING,
  })
  phone_number: string;

  @Column({
    type: DataType.STRING,
  })
  email: string;

  @Column({
    type: DataType.STRING,
  })
  sex: string;

  @Column({
    type: DataType.STRING,
  })
  note: string;

  @Column({
    type: DataType.UUID,
    // allowNull: false,
    references: {
      model: 'customer_levels',
      key: 'id',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  })
  level_id: string;

  @Column({
    type: DataType.DATE,
  })
  birthday: string;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_block: boolean;

  @Column({
    type: DataType.BOOLEAN,
  })
  is_flag: boolean;

  @Column({
    type: DataType.STRING,
  })
  flag_note: string;

  @Column({
    type: DataType.STRING,
  })
  block_note: string;

  @Column({
    type: DataType.STRING,
  })
  user_id: string;

  @Column({
    type: DataType.STRING,
  })
  referral_code: string;

  @Column({
    type: DataType.STRING,
  })
  customer_code: string;

  @Column({
    type: DataType.STRING,
  })
  avatar: string;

  @Column({
    type: DataType.ENUM('USER', 'SELLER', 'ALL'),
  })
  role_type: string;

  @CreatedAt
  created_at: Date;

  @UpdatedAt
  updated_at: Date;

  @DeletedAt
  deleted_at: Date;

  @HasMany(() => CustomerAddressModel)
  customer_addresses: CustomerAddressModel[];

  @HasMany(() => SellerModel)
  sellers: SellerModel[];

  transformToResponse() {
    const detail = JSON.parse(JSON.stringify(this));
    return detail;
  }
}
