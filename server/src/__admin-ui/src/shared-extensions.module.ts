import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebhookNavModule } from './extensions/9dbb293b1a40f7bba9d6421554a5565ad947f91ae5302e38bf850010d402a7d7/webhook-nav.module';
import { StockWidgetSharedModule } from './extensions/e6aa42fdfd050889816d83874033491135689b7b407863ac7542b973a8e11982/stock-widget.shared-module';


@NgModule({
    imports: [CommonModule, WebhookNavModule, StockWidgetSharedModule],
})
export class SharedExtensionsModule {}
