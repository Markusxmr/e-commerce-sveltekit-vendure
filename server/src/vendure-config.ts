import {
    dummyPaymentHandler,
    DefaultJobQueuePlugin,
    DefaultSearchPlugin,
    VendureConfig,
    ProductEvent,
    ProductVariantEvent,
    ChannelService,
    Injector,
} from '@vendure/core';
import {
    defaultEmailHandlers,
    EmailPlugin,
    orderConfirmationHandler,
    emailVerificationHandler,
    passwordResetHandler,
    emailAddressChangeHandler,
} from '@vendure/email-plugin';
import { AssetServerPlugin } from '@vendure/asset-server-plugin';
import { AdminUiPlugin } from '@vendure/admin-ui-plugin';
import { compileUiExtensions } from '@vendure/ui-devkit/compiler'
import 'dotenv/config';
import path from 'path';
import { WebhookPlugin } from 'vendure-plugin-webhook';
import { StockMonitoringPlugin, createLowStockEmailHandler } from 'vendure-plugin-stock-monitoring';
// import { MetricsPlugin } from "vendure-plugin-metrics";
import { StripePlugin } from '@vendure/payments-plugin/package/stripe';
import { BraintreePlugin } from '@vendure/payments-plugin/package/braintree';
import { Environment } from 'braintree';


const IS_DEV = process.env.APP_ENV === 'dev';
const PORT = process.env.PORT ?? 3000;
const ASSET_URL_PREFIX = process.env.ASSET_URL_PREFIX;

export const config: VendureConfig = {
    apiOptions: {
        port: Number(PORT),
        adminApiPath: 'admin-api',
        shopApiPath: 'shop-api',
        // The following options are useful in development mode,
        // but are best turned off for production for security
        // reasons.
        ...(IS_DEV ? {
            adminApiPlayground: {
                settings: { 'request.credentials': 'include' } as any,
            },
            adminApiDebug: true,
            shopApiPlayground: {
                settings: { 'request.credentials': 'include' } as any,
            },
            shopApiDebug: true,
        } : {}),
    },
    authOptions: {
        tokenMethod: ['bearer', 'cookie'],
        superadminCredentials: {
            identifier: process.env.SUPERADMIN_USERNAME,
            password: process.env.SUPERADMIN_PASSWORD,
        },
        cookieOptions: {
            secret: process.env.COOKIE_SECRET,
        },
    },
    dbConnectionOptions: {
        type: 'better-sqlite3',
        // See the README.md "Migrations" section for an explanation of
        // the `synchronize` and `migrations` options.
        synchronize: true,
        migrations: [path.join(__dirname, './migrations/*.+(js|ts)')],
        logging: false,
        database: path.join(__dirname, '../vendure.sqlite'),
    },
    paymentOptions: {
        paymentMethodHandlers: [dummyPaymentHandler],
    },
    // When adding or altering custom field definitions, the database will
    // need to be updated. See the "Migrations" section in README.md.
    customFields: {},
    plugins: [
        AssetServerPlugin.init({
            route: 'assets/',
            assetUploadDir: path.join(__dirname, '../static/assets'),
            // For local dev, the correct value for assetUrlPrefix should
            // be guessed correctly, but for production it will usually need
            // to be set manually to match your production url.
            assetUrlPrefix: IS_DEV ? undefined : ASSET_URL_PREFIX,
        }),
        DefaultJobQueuePlugin.init({ useDatabaseForBuffer: true }),
        DefaultSearchPlugin.init({ bufferUpdates: false, indexStockStatus: true }),
        EmailPlugin.init({
            devMode: true,
            outputPath: path.join(__dirname, '../static/email/test-emails'),
            route: 'mailbox',
            transport: {
                type: 'smtp',
                host: process.env?.SMTP_HOST ?? "",
                port: Number(process.env?.SMTP_PORT) ?? 465,
                auth: {
                    user: process.env?.SMTP_USERNAME ?? "",
                    pass: process.env?.SMTP_PASSWORD ?? "",
                },
                logging: true,
                debug: true,
            },
            handlers: [
                orderConfirmationHandler,
                emailVerificationHandler,
                passwordResetHandler,
                emailAddressChangeHandler,
                // Dynamically get email recipients based on the event
                // and send an email when stock drops below 10
                // createLowStockEmailHandler({
                //     threshold: 10,
                //     subject: "Stock of variants below 10",
                //     emailRecipients: async (injector, event) => {
                //         // Dynamically resolve email recipients with the injector and event
                //         // @ts-ignore
                //         const recipients = await injector.get(MyService).getAdminsForChannel(event?.ctx);
                //         return recipients;
                //     }
                // }),
                // // Send emails to two static addresses when stock drops below 99
                // createLowStockEmailHandler({
                //     threshold: 99,
                //     subject: "Stock of variants below 99",
                //     emailRecipients: ["marko.rendulic@gmail.com", "terra.core.tc@gmail.com"]
                // })
            ],
            templatePath: path.join(__dirname, '../static/email/templates'),
            globalTemplateVars: {
                // The following variables will change depending on your storefront implementation.
                // Here we are assuming a storefront running at http://localhost:8080.
                fromAddress: '"shop name" <noreply@get-some.org>',
                verifyEmailAddressUrl: 'http://localhost:8080/verify',
                passwordResetUrl: 'http://localhost:8080/password-reset',
                changeEmailAddressUrl: 'http://localhost:8080/verify-email-address-change'
            },
        }),
        AdminUiPlugin.init({
            route: 'admin',
            port: 3002,
            // app: compileUiExtensions({
            //     outputPath: path.join(__dirname, '__admin-ui'),
            //     extensions: [
            //         WebhookPlugin.ui,
            //         StockMonitoringPlugin.ui,
            //         // MetricsPlugin.ui
            //     ],
            // }),
        }),
        BraintreePlugin.init({
            environment: Environment.Sandbox,
            // This allows saving customer payment
            // methods with Braintree (see "vaulting"
            // section below for details)
            storeCustomersInBraintree: true,
        }),
        // MetricsPlugin,
        // WebhookPlugin.init({
        //     httpMethod: 'POST',
        //     /**
        //      * Optional: 'delay' waits and deduplicates events for 3000ms.
        //      * If 4 events were fired for the same channel within 3 seconds,
        //      * only 1 webhook call will be sent
        //      */
        //     delay: 3000,
        //     events: [ProductEvent, ProductVariantEvent],
        //     /**
        //      * Optional: 'requestFn' allows you to send custom headers
        //      * and a custom body with your webhook call.
        //      * By default, the webhook POST will have an empty body
        //      */
        //     requestFn: async (
        //         event: ProductEvent | ProductVariantEvent,
        //         injector: Injector
        //     ) => {
        //         // Get data via injector and build your request headers and body
        //         const { id } = await injector
        //             .get(ChannelService)
        //             .getChannelFromToken(event.ctx.channel.token);
        //         return {
        //             headers: { test: '1234' },
        //             body: JSON.stringify({ createdAt: event.createdAt, channelId: id }),
        //         };
        //     },
        // }),
        // StockMonitoringPlugin.init({
        //     threshold: 10,
        // }),
        StripePlugin.init({
            apiKey: process.env.STRIPE_SECRET_KEY ?? "",
            webhookSigningSecret: process.env.STRIPE_WEBHOOK_SIGNING_SECRET ?? "",
            // This prevents different customers from using the same PaymentIntent
            storeCustomersInStripe: true,
        }),
    ],
};
