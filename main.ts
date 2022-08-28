import {serve} from "https://deno.land/std@0.153.0/http/server.ts";
import { handle } from './astro/dist/server/entry.mjs';

serve((req: Request) => {
  console.log(req)
  return handle(req);
}, { port: 8009 });