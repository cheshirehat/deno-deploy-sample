addEventListener("fetch", (event) => {
  const blob = new Blob(["<html><head><title>Hello Deno deploy!<</title></head><body>Hello Deno deploy</body></html>"], { type: 'text/html' })
  const response = new Response(blob, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});