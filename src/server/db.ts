// src/server/db.ts
import { drizzle } from "drizzle-orm/d1";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import * as schema from "@/db/schema";

export const getDB = async () => {
  const { env } = await getCloudflareContext();
  return drizzle(env.blog_db, { schema });
};