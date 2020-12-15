# Mapa pro zobrazení projektů v zásobníku

Mapka pro vizualizaci projektů v zásobníku.
Vhodná na jakýkoli existující web.

## Jak přidat na web

Příklad je v [index.html](index.html).
Do stránky je [nutné přidat skripty pro leaflet a axios](index.html#L10):

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" 
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" 
  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
<script src="app.js"></script>
```

Na stránce [udělat div pro mapku](index.html#L25).
[Zavolat funckci pridejMapuProjektu](index.html#L30) s náležitými parametry.

