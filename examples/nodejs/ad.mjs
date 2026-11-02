// OLX Ad API – Node.js example (Node 18+, native fetch, ES module)
// Usage: PILOTERR_API_KEY=your-key node ad.mjs

const params = new URLSearchParams({
  "query": "https://www.olx.pl/d/oferta/apple-iphone-17-pro-256-gb-nowy-szczecin-zaplombowany-karta-sim-ul-baluki-4-szczecin-CID99-ID18Acsd.html",
});

const response = await fetch(`https://api.piloterr.com/v2/olx/ad?${params}`, {
  headers: { "x-api-key": process.env.PILOTERR_API_KEY },
  signal: AbortSignal.timeout(120_000),
});

if (!response.ok) {
  console.error(`Piloterr error ${response.status}: ${await response.text()}`);
  process.exit(1);
}

console.log(JSON.stringify(await response.json(), null, 2));
