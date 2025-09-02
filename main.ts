import { serve } from "https://deno.land/std@0.208.0/http/server.ts";

function handler(req: Request): Response {
  const url = new URL(req.url);
  const stringParam = url.searchParams.get("string");
  
  if (stringParam === null) {
    return new Response("Missing 'string' query parameter", { status: 400 });
  }
  
  return new Response(stringParam, {
    headers: { "Content-Type": "text/plain" },
  });
}

console.log("HTTP server running on http://localhost:8000");
await serve(handler, { port: 8000 });
