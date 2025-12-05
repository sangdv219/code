import {
  Column,
  Table,
  DataType,
  ForeignKey,
  HasMany,
  BelongsTo,
} from 'sequelize-typescript';

import { integer } from 'aws-sdk/clients/cloudfront';
import { BaseModel } from 'src/common/base/_';
import {
  BundleApplyModel,
  CancelReasonModel,
  OrderItemModel,
  OrderPaymentItemModel,
  OrderStepLogModel,
  OrderWorkflowModel,
  OrderWorkflowStepModel,
  PaymentMethodModel,
  PlatformModel,
  SalesChannelModel,
  ShippingMethodModel,
  ShippingProviderModel,
  VoucherApplyModel,
  WarehouseModel,
} from './_';
import { RoleTypeEnum } from 'src/common/constants/role-types';

@Table({ modelName: 'orders' })
export class OrderModel extends BaseModel {
  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  code: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  state: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  provisional_amount: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  shipping_amount: integer;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  amount: integer;

  @Column({
    type: DataType.STRING(200),
    allowNull: false,
  })
  customer_name: string;

  @Column({
    type: DataType.STRING(20),
    allowNull: false,
  })
  customer_phone: string;

  @Column({
    type: DataType.TEXT,
    allowNull: false,
  })
  customer_address: string;

  @Column({
    type: DataType.STRING(500),
  })
  customer_email: string;

  @Column({
    type: DataType.STRING(100),
    allowNull: false,
  })
  customer_address_type: string;

  @Column({
    type: DataType.STRING,
  })
  tiki_ward_code: string;

  @Column({
    type: DataType.UUID,
  })
  auto_next_workflow_step_id?: string;

  @Column({
    type: DataType.DATE,
  })
  auto_next_workflow_step_at?: Date;

  @Column({
    type: DataType.TEXT,
  })
  auto_error?: string;

  @Column({
    type: DataType.TEXT,
  })
  note?: string;

  @Column({
    type: DataType.STRING,
  })
  sale_by?: string;

  @Column({
    type: DataType.STRING,
  })
  tax_code?: string;

  @Column({
    type: DataType.STRING,
  })
  platform?: string;

  @Column({
    type: DataType.STRING,
  })
  channel?: string;

  @ForeignKey(() => PlatformModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    field: 'platform_id',
  })
  platform_id?: string;

  @ForeignKey(() => SalesChannelModel)
  @Column({
    type: DataType.UUID,
    allowNull: true,
    field: 'sales_channel_id',
  })
  sales_channel_id?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  is_allow_auto: boolean;

  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  user_id: string;

  @ForeignKey(() => ShippingProviderModel)
  @Column({
    type: DataType.UUID,
    allowNull: true, // bạn đặt là true trong migration
  })
  shipping_provider_id: string;

  @BelongsTo(() => ShippingProviderModel, {
    foreignKey: 'shipping_provider_id',
  })
  shipping_provider: ShippingProviderModel;

  @Column({
    type: DataType.JSONB,
  })
  extra_data: Record<string, any>;

  @Column({
    type: DataType.ENUM(...Object.values(RoleTypeEnum)),
  })
  type: RoleTypeEnum;

  @ForeignKey(() => PaymentMethodModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  payment_method_id: string;

  @ForeignKey(() => WarehouseModel)
  @Column({
    type: DataType.UUID,
  })
  warehouse_id: string;

  @ForeignKey(() => ShippingMethodModel)
  @Column({
    type: DataType.UUID,
    allowNull: false,
  })
  shipping_method_id: string;

  @ForeignKey(() => CancelReasonModel)
  @Column({
    type: DataType.UUID,
  })
  cancel_reason_id: string;

  @ForeignKey(() => OrderWorkflowModel)
  @Column({
    type: DataType.UUID,
  })
  workflow_id: string;

  @ForeignKey(() => OrderWorkflowStepModel)
  @Column({
    type: DataType.UUID,
  })
  step_id: string;

  @BelongsTo(() => PaymentMethodModel, { foreignKey: 'payment_method_id' })
  payment_method: PaymentMethodModel;

  @BelongsTo(() => WarehouseModel, { foreignKey: 'warehouse_id' })
  warehouse: WarehouseModel;

  @BelongsTo(() => ShippingMethodModel, { foreignKey: 'shipping_method_id' })
  shipping_method: ShippingMethodModel;

  @BelongsTo(() => CancelReasonModel, { foreignKey: 'cancel_reason_id' })
  cancel_reason: CancelReasonModel;

  @BelongsTo(() => OrderWorkflowModel, { foreignKey: 'workflow_id' })
  workflow: CancelReasonModel;

  @BelongsTo(() => OrderWorkflowStepModel, { foreignKey: 'step_id' })
  step: OrderWorkflowStepModel;

  @BelongsTo(() => OrderWorkflowStepModel, {
    foreignKey: 'auto_next_workflow_step_id',
  })
  auto_next_workflow_step: OrderWorkflowStepModel;

  @BelongsTo(() => PlatformModel, {
    foreignKey: 'platform_id',
    as: 'platform_relation',
  })
  platform_relation?: PlatformModel;

  @BelongsTo(() => SalesChannelModel, {
    foreignKey: 'sales_channel_id',
    as: 'sales_channel_relation',
  })
  sales_channel_relation?: SalesChannelModel;

  @HasMany(() => OrderItemModel)
  order_items: OrderItemModel[];

  @HasMany(() => OrderPaymentItemModel)
  order_payment_items: OrderPaymentItemModel[];

  @HasMany(() => OrderStepLogModel)
  step_logs: OrderStepLogModel[];

  @HasMany(() => VoucherApplyModel)
  voucher_applied: VoucherApplyModel[];

  @HasMany(() => BundleApplyModel)
  bundle_applies: BundleApplyModel[];

  // Database triggers handle order state change notifications
  // No afterUpdate hook needed to prevent duplicate events
}
