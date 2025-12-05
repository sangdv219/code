import { Table } from 'sequelize-typescript';

import * as _ from 'lodash';
import { BaseModel } from 'src/common/base/_';

@Table({ modelName: 'order_workflows' })
export class OrderWorkflowModel extends BaseModel {}
