import { loadStripe, Stripe } from "@stripe/stripe-js";
import { stripe } from "./stripe";

let stripePromise: Promise<Stripe | null>;

export const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
    );
  }

  return stripePromise;
};
