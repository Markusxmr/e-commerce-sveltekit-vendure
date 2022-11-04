export const extensionRoutes = [  {
    path: 'extensions/webhook',
    loadChildren: () => import('./extensions/a579fda6190f0bb6a39375e91ffa3383f747f4a02db69374a3c61fa9bc695351/webhook.module').then(m => m.WebhookModule),
  }];
