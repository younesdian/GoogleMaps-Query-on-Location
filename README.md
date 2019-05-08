# Javascript-Location-Map
This Script gets your location. 
Returns it in a latitude (lat) and a longitude (long), this will be used in the google maps url so that google can locate you.
When the lat and long are fetched and added to the url you can do one more thing: add a query so that google will search for your query in the area of your location. The area is determined bij the "z" in the url.

For example: https://maps.google.com/maps?q=Restaurant&ll=52.0255219,5.5368449&z=10&output=embed
This will show you all the restaurant in the area of my location.

Find ere the decomposition of the url: <br>
https://maps.google.com/maps? = The url for Google maps <br>
q=Restaurant =  the query that Google will uses for the search (Optional) <br>
&ll="40.712776,-74.005974" = Your latitude and longitude that google uses to locate you <br>
&z=10 = This is the zoom of the map this will determined the range of the map how lower the number how greater the range.<br>
&output=embed = this tells Google it is a embeded.
