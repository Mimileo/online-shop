import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();

// export to allow us to use stripe to create payments, sesssions and more
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);