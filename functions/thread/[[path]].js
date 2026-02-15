export async function onRequest(context) {
  const url = new URL(context.request.url);

  // Serve the static fallback page but keep the original URL in the address bar.
  url.pathname = "/thread/";

  // ASSETS is the built-in static asset fetcher in Pages Functions.
  return context.env.ASSETS.fetch(url.toString(), context.request);
}
