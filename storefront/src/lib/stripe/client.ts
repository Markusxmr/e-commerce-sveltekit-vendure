import { loadStripe } from '@stripe/stripe-js';
import type { Stripe as StripeClient } from '@stripe/stripe-js';

export async function stripeClientBrowser(): Promise<StripeClient> {
    return loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY ?? "");
}
