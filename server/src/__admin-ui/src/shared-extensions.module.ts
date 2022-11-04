import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebhookNavModule } from './extensions/a579fda6190f0bb6a39375e91ffa3383f747f4a02db69374a3c61fa9bc695351/webhook-nav.module';
import { StockWidgetSharedModule } from './extensions/cb5ea0370e0ee9f3a95d54ffd535cd2678ebfe27c83a70b996ef50cb56da664a/stock-widget.shared-module';
import { MetricsWidgetSharedModule } from './extensions/2532dd5f25f5869aacdc1b25dc39696795275fe644e266be9897dccef3da83d1/metrics-widget.shared-module';


@NgModule({
    imports: [CommonModule, WebhookNavModule, StockWidgetSharedModule, MetricsWidgetSharedModule],
})
export class SharedExtensionsModule {}
