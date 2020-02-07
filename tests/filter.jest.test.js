const filterByQuery = require('../utils/filters').filterByQuery;
const filterByDistance = require('../utils/filters').filterByDistance;
const readFile = require('../utils/fs').getFromFileJSON;


test('filterByQuery sorts data and return an array', async () => {
    const restaurants = (await readFile(__dirname+'./../materials/restaurants.json')).restaurants;
    const data = await filterByQuery('sushi', restaurants);
    expect(data).toMatchObject([
        {
            "blurhash": "UZP$~|R*o~tRyEM{V[f7?wRjVsV@IAozfhae",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "Ilmi\u00f6m\u00e4isi\u00e4 sushiburritoja",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/57d7af84b7426f114912b2a1/75742ebe3c411262325c647a3acbd5b2",
            "location": [
                24.9400752782822,
                60.1701494897883
            ],
            "name": "Soma Food, Kaivokatu",
            "online": true,
            "tags": [
                "sushi",
                "burrito"
            ]
        },
        {
            "blurhash": "UdI3~;Ip0}Rk={bH9]oJW.RjnlbvNeV@xtbI",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "Tuoretta ja laadukasta sushia",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/5ad7050b879256000b477e16/705b6f09e5e4b33779b45afffb994cac",
            "location": [
                24.94049370288849,
                60.16995648878383
            ],
            "name": "Luckiefun's Kaivokatu",
            "online": false,
            "tags": [
                "sushi",
                "japanese"
            ]
        },
        {
            "blurhash": "U8Q9.m.TDitlysx]9u%2?bVX-TIn_2gP?bxu",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "Urbaani citysuunnistaja keskustassa",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/5afebf92317288000b8e4c17/24797b40bc5f136cb5605f4de79c0a42",
            "location": [
                24.941813349723816,
                60.16974835162762
            ],
            "name": "Sushibar + Wine City",
            "online": false,
            "tags": [
                "sushi",
                "japanese"
            ]
        },
        {
            "blurhash": "UYLgb6ad*0%24nf6DiRjI]RjMxSgMxx[kBRQ",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "Sushia tuoreista raaka-aineista",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/56a1d69c38115153ce516be7/b55be8561839f5bf03cf1e78933a8295",
            "location": [
                24.938321113586426,
                60.16940733239114
            ],
            "name": "Hanko Sushi Forum",
            "online": false,
            "tags": [
                "sushi",
                "japanese"
            ]
        },
        {
            "blurhash": "UUG8TIIAnO%2~AspRkRP^iaJwwxZV@oLr?n%",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "Laadukasta sushia",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/54fed4b8747daa39fff94ff2/57606ccce2a2ed4ce98d4043934e013e",
            "location": [
                24.939225018024445,
                60.16898783926865
            ],
            "name": "Fuku Helsinki",
            "online": false,
            "tags": [
                "sushi",
                "japanese"
            ]
        },
        {
            "blurhash": "UYLW^ead*0%24nf6DiRjI]RjMxSgMxx]kBRQ",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "Sushia tuoreista raaka-aineista",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/5ccab0d56f0ac41e1cd75f7f/3204aff8bf9036615d694f0f85755726",
            "location": [
                24.942486584186554,
                60.16846747856398
            ],
            "name": "Hanko Sushi Stockmann",
            "online": false,
            "tags": [
                "sushi",
                "japanese"
            ]
        },
        {
            "blurhash": "UULghDyZ?H9ax^xv-oX8%2NKNFRPIp?GNHof",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "K\u00e4sintehty\u00e4 sushia",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/5bd16f9fae0064000c88ce3a/4579a3e0b606975c69ebcf2ab1a50d4b",
            "location": [
                24.937022924423218,
                60.169811851945454
            ],
            "name": "Haiku Sushi",
            "online": false,
            "tags": [
                "sushi",
                "japanese"
            ]
        },
        {
            "blurhash": "UNGt~CVsX:EQ9_D$IVV?0$gN-T-pMdt8i]X9",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "Herkullinen aasialainen",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/5de10291107530a9eff0a6d4/60bb8d0268e723ff3741fe21324b71fb",
            "location": [
                24.94673252105713,
                60.17130667985175
            ],
            "name": "FLQ Kaisaniemi",
            "online": false,
            "tags": [
                "asian",
                "sushi"
            ]
        },
        {
            "blurhash": "U8JG+q-#?p]:~S[mxrpEpw-;rCAa9^m+IBS%",
            "city": "Helsinki",
            "currency": "EUR",
            "delivery_price": 390,
            "description": "Kiinalaisia perinneruokia",
            "image": "https://prod-wolt-venue-images-cdn.wolt.com/56c2ec86909ca36c652dad14/14aa53560b987b36da0d50069ca7e267",
            "location": [
                24.938911199569702,
                60.17328170963167
            ],
            "name": "Jufu Rautatientori",
            "online": false,
            "tags": [
                "chinese",
                "sushi"
            ]
        }
    ])
});

test('filterByDistance sorts data and return an array', async () => {
    const restaurants = (await readFile(__dirname+'./../materials/restaurants.json')).restaurants;

    const coordinates = {
        longitude: 24.841136799999997,
        latitude: 60.281047900000004
    };

    const distance = 13.2;

    const data = await filterByDistance( restaurants, coordinates, distance);
    expect(data).toMatchObject(
        [
            {
                "blurhash": "U8JG+q-#?p]:~S[mxrpEpw-;rCAa9^m+IBS%",
                "city": "Helsinki",
                "currency": "EUR",
                "delivery_price": 390,
                "description": "Kiinalaisia perinneruokia",
                "image": "https://prod-wolt-venue-images-cdn.wolt.com/56c2ec86909ca36c652dad14/14aa53560b987b36da0d50069ca7e267",
                "location": [
                    24.938911199569702,
                    60.17328170963167
                ],
                "name": "Jufu Rautatientori",
                "online": false,
                "tags": [
                    "chinese",
                    "sushi"
                ]
            },
            {
                "blurhash": "UHH_GGD*Iq?u}?x]%MxuSgf+D*NL-.IVE3ac",
                "city": "Helsinki",
                "currency": "EUR",
                "delivery_price": 390,
                "description": "Gourmet burgerit Australiasta",
                "image": "https://prod-wolt-venue-images-cdn.wolt.com/55f71c7ec04ebe16e6859aa7/121b9eccc7d813b541aa42a164fdf4ed",
                "location": [
                    24.938988983631134,
                    60.173556527576
                ],
                "name": "Woolshed – Australian Gastropub",
                "online": true,
                "tags": [
                    "gourmet",
                    "hamburger"
                ]
            }
        ]
    )
});