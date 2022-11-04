import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebhookNavModule } from './extensions/9dbb293b1a40f7bba9d6421554a5565ad947f91ae5302e38bf850010d402a7d7/webhook-nav.module';
import { StockWidgetSharedModule } from './extensions/e6aa42fdfd050889816d83874033491135689b7b407863ac7542b973a8e11982/stock-widget.shared-module';
import { MetricsWidgetSharedModule } from './extensions/0ab47e5b3620d5627c645fa43b307ee394eed975b0f259549f1327baa62ff4e4/metrics-widget.shared-module';


@NgModule({
    imports: [CommonModule, WebhookNavModule, StockWidgetSharedModule, MetricsWidgetSharedModule],
})
export class SharedExtensionsModule {}
