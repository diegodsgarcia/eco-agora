export async function load({ fetch, setHeaders }) {
  setHeaders({
    'cache-control': 'max-age=60',
  });
  const res = await fetch('https://api.ecorodovias.com.br/anonymous/ecorodovias-portal/ecovias/playful-map')
  const { Cameras } = await res.json()
  return { cameras: Cameras }
}
