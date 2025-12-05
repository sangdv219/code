import { Column, Table, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { BaseModel } from 'src/common/base/_';
import { CustomerModel } from './customer.model';
import { MessageModel } from './message.model';

@Table({ modelName: 'liked_messages' })
export class LikedMesssageModel extends BaseModel {
    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    is_liked: boolean;

    @ForeignKey(() => CustomerModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    customer_id: string;

    @ForeignKey(() => MessageModel)
    @Column({
        type: DataType.UUID,
        allowNull: false,
    })
    message_id: string;

    @BelongsTo(() => CustomerModel, 'customer_id')
    customer: CustomerModel;

    @BelongsTo(() => MessageModel, 'message_id')
    message: MessageModel;
}
