import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';

function validateEnv() {
  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const databaseId = process.env.CLOUDFLARE_DATABASE_ID;
  const token = process.env.CLOUDFLARE_D1_TOKEN;
  if (!accountId || !databaseId || !token) {
    throw new Error(`Missing environment variables: ${!accountId ? 'CLOUDFLARE_ACCOUNT_ID ' : ''}${!databaseId ? 'CLOUDFLARE_DATABASE_ID ' : ''}${!token ? 'CLOUDFLARE_D1_TOKEN ' : ''}`.trim());
  }
  return { accountId, databaseId, token };
}

const env = validateEnv();

export default defineConfig({
  out: './migrations',
  schema: './src/db/schema.ts',
  dialect: 'sqlite',
  driver: 'd1-http',
  dbCredentials: {
    accountId: env.accountId,
    databaseId: env.databaseId,
    token: env.token,
  },
});
