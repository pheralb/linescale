import { serverSchema } from "./schema.mjs";
import { env as clientEnv, formatErrors } from "./client.mjs";

const _serverEnv = serverSchema.safeParse(process.env);

if (_serverEnv.success === false) {
  console.error(
    "[env/server.mjs] - ❌ Invalid environment variables:\n",
    ...formatErrors(_serverEnv.error.format()),
  );
  throw new Error("[env/server.mjs] - Invalid environment variables");
}

for (let key of Object.keys(_serverEnv.data)) {
  if (key.startsWith("NEXT_PUBLIC_")) {
    console.warn("[env/server.mjs] - ❌ You are exposing a server-side env-variable:", key);

    throw new Error("[env/server.mjs] - You are exposing a server-side env-variable");
  }
}

export const env = { ..._serverEnv.data, ...clientEnv };
