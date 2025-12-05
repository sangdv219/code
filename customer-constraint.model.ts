import { Column, DataType, Table } from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/base.model';
import { CustomerRank } from 'src/common/constants/customer-rank';
import { RoleTypeEnum } from 'src/common/constants/role-types';

@Table({ modelName: 'customer_constraints' })
export class CustomerConstraintModel extends BaseModel {
  @Column({
    type: DataType.ENUM(...Object.values(RoleTypeEnum)),
    allowNull: false,
  })
  customer_type: RoleTypeEnum;

  @Column({
    type: DataType.ENUM(...Object.values(CustomerRank)),
  })
  customer_rank: CustomerRank;

  @Column({
    type: DataType.INTEGER,
  })
  max_quantity_per_item: number;

  @Column({
    type: DataType.INTEGER,
  })
  max_quantity_per_order: number;

  @Column({
    type: DataType.INTEGER,
  })
  min_provisional_promotion_amount: number;
}
