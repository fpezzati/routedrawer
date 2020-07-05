#routedrawer
What this project should be about? Have fun with GIS and maps and CI and more.

Routedrawer must provide a tool to plan routes between points. Routes and points take place on a map, user should be able to mark points and organize routes connecting those points. Routes and points compose service model. A service model find its representation as a GeoJson document.

## How points and routes join and match together?
What is a route? A route is a collection of two or more points in which each point can reach the previous and the next one in the route collection. So, points order matters.

GeoJson LineString seems not elegible as route.

Let's separate model from it's representation. Route is a collection of points and a bunch of attributes, `id` among them all. Points in a route take place as a sequence, order in the sequence means that you can reach point `5` by point `4` and you can proceed to point in sixth position in the route sequence.
