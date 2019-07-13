# Google Maps Query URL

### Users location
This Script gets your location, returns it in a latitude (lat) and a longitude (long), this will be used in the Google maps url. So Google can use this to know from which location to search.
When the lat and long are fetched and added to the url you can do one more thing: add a query so that google will search for your query in the area of the location the script got. The area is determined bij the "z" (zoom) in the url.

#### For example
```
https://maps.google.com/maps?q=Restaurant&ll=41.881832,-87.623177&z=10&output=embed
```
This will show you all the restaurant in the area of Chicago.

### Find here the decomposition of the url

The url for Google maps
```
https://maps.google.com/maps?
```

the query that Google will uses for the search
```
q=Restaurant
```

Your latitude and longitude that google uses to know from which location to search <br>
```
&ll="40.712776,-74.005974"
```

This is the zoom of the map this will determine the range of the map how lower the number how greater the range.
```
&z=10
```

this lets Google know it's embeded.
```
&output=embed
```
