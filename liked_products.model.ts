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
	ForeignKey, BelongsTo,
} from 'sequelize-typescript';

import * as _ from 'lodash';
import { CustomerModel } from './customer.model';

@Table({
	modelName: 'liked_products',
})
export class LikedProductModel extends Model<LikedProductModel> {
	@PrimaryKey
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
	})
	id: string;

	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	item_id: string;

	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	item_sku_id: string;

	@Column({
		type: DataType.UUID,
		allowNull: false,
	})
	@ForeignKey(() => CustomerModel)
	customer_id: string;

	@CreatedAt
	created_at: Date;

	@UpdatedAt
	updated_at: Date;

	@BelongsTo(() => CustomerModel, 'customer_id')
	customer: CustomerModel;

	transformToResponse() {
		const detail = JSON.parse(JSON.stringify(this));
		return detail;
	}
}
