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
	modelName: 'users',
})
export class UserModel extends Model<UserModel> {
	@PrimaryKey
	@Column({
		type: DataType.UUID,
		defaultValue: DataType.UUIDV4,
	})
	id: string;

	@Column({
		type: DataType.STRING,
		unique: true,
	})
	email: string;

	// @Column({
	// 	type: DataType.STRING,
	// 	unique: true,
	// })
	// user_name: string;

	@Column({
		type: DataType.STRING,
		unique: true,
	})
	phone_number: string;

	// @Column({
	// 	type: DataType.STRING,
	// })
	// otp: string;

	@Column({
		type: DataType.STRING,
	})
	status: string;

	// @Column({
	// 	type: DataType.STRING,
	// 	unique: true,
	// })
	// google_id: string;

	// @Column({
	// 	type: DataType.STRING,
	// 	unique: true,
	// })
	// facebook_id: string;

	// @Column({
	// 	type: DataType.STRING,
	// 	allowNull: false,
	// })
	// password: string;

	@Column({
		type: DataType.STRING,
		defaultValue: false,
	})
	is_otp_verified: boolean;

	@Column({
		type: DataType.DATE,
	})
	otp_expired_at: Date;

	@CreatedAt
	created_at: Date;

	@UpdatedAt
	updated_at: Date;

	@DeletedAt
	deleted_at: Date;

	transformToResponse() {
		const detail = JSON.parse(JSON.stringify(this));
		delete detail.password;
		return detail;
	}
}
