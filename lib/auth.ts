import { betterAuth } from "better-auth";
import { expo } from "@better-auth/expo";
import { Pool } from "pg";

export const auth = betterAuth({
    database: new Pool({
      connectionString: process.env.DB_URL,
    }),
    plugins: [expo()],
    emailAndPassword: { 
        enabled: true,
      }, 
    trustedOrigins: ["expotemplateapp://"]
});