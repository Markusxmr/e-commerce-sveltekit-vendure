export const extensionRoutes = [  {
    path: 'extensions/webhook',
    loadChildren: () => import('./extensions/9dbb293b1a40f7bba9d6421554a5565ad947f91ae5302e38bf850010d402a7d7/webhook.module').then(m => m.WebhookModule),
  }];
