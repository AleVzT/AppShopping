import { NgModule } from '@angular/core';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzImageModule } from 'ng-zorro-antd/image';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzCollapseModule } from 'ng-zorro-antd/collapse';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzMessageModule } from 'ng-zorro-antd/message';

@NgModule({
  exports: [
    NzButtonModule,
    NzCardModule,
    NzGridModule,
    NzMenuModule,
    NzIconModule,
    NzImageModule,
    NzFormModule,
    NzInputModule,
    NzTypographyModule,
    NzCollapseModule,
    NzSpaceModule,    
    NzInputNumberModule,
    NzDividerModule,
    NzMessageModule,
  ]
})
export class NgZorroAntdModule { }