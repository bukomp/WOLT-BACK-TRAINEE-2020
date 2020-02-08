
/*
    FilterByQuery filters array of restaurants with given query string by searching
    partial or full matches in name, description, tags.

    As parameters takes:
    query:String = string by witch array is sorted
    array:Array = array of restaurants

    Returns array of filtered restaurants.
*/
const filterByQuery = async (query, array) => {
    if(query.length<=0) return null;
    const tempArr = array.filter( object =>
        object.name.includes(query)
        ||  object.description.includes(query)
        ||  object.tags.includes(query)
    );

    return tempArr;
};

/*
    FilterByQuery filters array of restaurants with given coordinates by calculating distance between
    given coordinates and coordinates of restaurant.

    As parameters takes:
    array:Array = array of restaurants
    coordinates:Object = contains coordinates. Example: { "latitude" : 60.17045 , "longitude" : 24.93147 }

    Returns array of filtered restaurants.
*/
const filterByDistance = (array, coordinates, distance) => {

    const distanceFilter = (lat1, lon1, lat2, lon2) => {
        if ((lat1 === lat2) && (lon1 === lon2)) {
            return 0;
        }
        else {
            const radlat1 = Math.PI * lat1/180;
            const radlat2 = Math.PI * lat2/180;
            const theta = lon1-lon2;
            const radtheta = Math.PI * theta/180;
            let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
            if (dist > 1) {
                dist = 1;
            }
            dist = Math.acos(dist);
            dist = dist * 180/Math.PI;
            dist = dist * 60 * 1.1515;
            dist = dist * 1.609344;

            return dist;
        }
    };

    const tempArr = array.filter( object =>
        distance >= distanceFilter(coordinates.latitude, coordinates.longitude, object.location[1], object.location[0])
    );

    return tempArr;
};

module.exports = {
    filterByDistance,
    filterByQuery
};