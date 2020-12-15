# Mapa pro zobrazení projektů v zásobníku

API pro management vodoměrů (odběrným místech, OM) a jejich stavů.
Umí dálkový odečet přes:
- Projektový zásobník [TTN](https://www.thethingsnetwork.org/) infrastrukturu.

## Jak přidat na web

Příklad je v [index.html](index.html).
Do stránky je nutné přidat tyto skripty:

```
<script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" 
  integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A==" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" 
  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA==" crossorigin=""></script>
<script src="app.js"></script>
```

Na stránce udělat div pro mapku.
Zavolat funckci pridejMapuProjektu s náležitými parametry.

