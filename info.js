// info.js
// Earth letter database – each letter maps to an array of possible satellite images
// All images are .png files inside the /Images folder

const earthDatabase = {
  'a': [
    {
      file: 'a.png',
      location: 'Lake Guakhmaz, Azerbaijan',
      lat: 40.664111,
      lon: 47.110056,
      coords_dms: "40°39'50.8\" N 47°06'36.2\" E"
    },
    {
      file: 'a(1).png',
      location: 'Farm Island, Maine',
      lat: 45.728833,
      lon: -69.769139,
      coords_dms: "45°43'43.8\" N 69°46'08.9\" W"
    },
    {
      file: 'a(2).png',
      location: 'Lake Mjøsa, Norway',
      lat: 60.764639,
      lon: 10.945333,
      coords_dms: "60°45'52.7\" N 10°56'43.2\" E"
    }
  ],
  'b': [
    {
      file: 'b.png',
      location: 'Humaitá, Brazil',
      lat: -7.616694,
      lon: -62.921389,
      coords_dms: "7°37'00.1\" S 62°55'17.0\" W"
    },
    {
      file: 'b(1).png',
      location: 'Holla Bend, Arkansas',
      lat: 35.14475,
      lon: -93.054583,
      coords_dms: "35°08'41.1\" N 93°03'16.5\" W"
    }
  ],
  'c': [
    {
      file: 'c.png',
      location: 'Black Rock Desert, Nevada',
      lat: 40.787722,
      lon: -119.203611,
      coords_dms: "40°47'15.8\" N 119°12'13.0\" W"
    },
    {
      file: 'c(1).png',
      location: 'False River, Louisiana',
      lat: 30.644361,
      lon: -91.445694,
      coords_dms: "30°38'39.7\" N 91°26'45.7\" W"
    }
  ],
  'd': [
    {
      file: 'd.png',
      location: 'Lake Tandou, Australia',
      lat: -32.538278,
      lon: 142.072611,
      coords_dms: "32°37'17.8\" S 142°04'21.4\" E"
    },
    {
      file: 'd(1).png',
      location: 'Akimiski Island, Canada',
      lat: 53.01625,
      lon: -81.306833,
      coords_dms: "53°00'58.5\" N 81°18'24.6\" W"
    }
  ],
  'e': [
    {
      file: 'e.png',
      location: 'Sea of Okhotsk',
      lat: 54.713972,
      lon: 136.572333,
      coords_dms: "54°42'50.3\" N 136°34'20.4\" E"
    },
    {
      file: 'e(1).png',
      location: 'Breiðamerkurjökull Glacier, Iceland',
      lat: 64.095833,
      lon: -16.362667,
      coords_dms: "64°05'45.0\" N 16°21'45.6\" W"
    },
    {
      file: 'e(2).png',
      location: 'Firn-filled Fjords, Tibet',
      lat: 29.263028,
      lon: 96.317722,
      coords_dms: "29°15'46.9\" N 96°19'03.8\" E"
    }
  ],
  'f': [
    {
      file: 'f.png',
      location: 'Kruger National Park, South Africa',
      lat: -28.733694,
      lon: 29.208361,
      coords_dms: "28°44'01.3\" S 29°12'30.1\" E"
    },
    {
      file: 'f(1).png',
      location: 'Mato Grosso, Brazil',
      lat: -13.840806,
      lon: -55.298611,
      coords_dms: "13°50'26.9\" S 55°17'55.0\" W"
    }
  ],
  'g': [
    {
      file: 'g.png',
      location: 'Fonte Boa, Amazonas',
      lat: -2.441889,
      lon: -66.278806,
      coords_dms: "2°26'30.8\" S 66°16'43.7\" W"
    }
  ],
  'h': [
    {
      file: 'h.png',
      location: 'Khorinsky District, Russia',
      lat: 52.047333,
      lon: 109.780889,
      coords_dms: "52°02'50.4\" N 109°46'51.2\" E"
    },
    {
      file: 'h(1).png',
      location: 'Southwestern Kyrgyzstan',
      lat: 40.234333,
      lon: 71.239667,
      coords_dms: "40°14'03.6\" N 71°14'22.8\" E"
    }
  ],
  'i': [
    {
      file: 'i.png',
      location: 'Etosha National Park, Namibia',
      lat: -18.487556,
      lon: 16.170722,
      coords_dms: "18°29'15.2\" S 16°10'14.6\" E"
    },
    {
      file: 'i(1).png',
      location: 'Canandaigua Lake, New York',
      lat: 42.786389,
      lon: -77.716139,
      coords_dms: "42°47'11.0\" N 77°42'58.1\" W"
    },
    {
      file: 'i(2).png',
      location: 'Borgarbyggð, Iceland',
      lat: 64.762889,
      lon: -22.457778,
      coords_dms: "64°45'46.4\" N 22°27'28.0\" W"
    },
    {
      file: 'i(3).png',
      location: 'Holuhraun Ice Field, Iceland',
      lat: 64.853111,
      lon: -16.827,
      coords_dms: "64°51'11.2\" N 16°49'37.2\" W"
    }
  ],
  'j': [
    {
      file: 'j.png',
      location: 'Great Barrier Reef',
      lat: -18.348694,
      lon: 146.847611,
      coords_dms: "18°20'55.3\" S 146°50'51.4\" E"
    },
    {
      file: 'j(1).png',
      location: 'Lake Superior, North America',
      lat: 46.686167,
      lon: -90.386528,
      coords_dms: "46°41'10.2\" N 90°23'11.5\" W"
    }
  ],
  'k': [
    {
      file: 'k.png',
      location: 'Golmud, China',
      lat: 35.612861,
      lon: 95.06275,
      coords_dms: "35°36'46.3\" N 95°03'45.9\" E"
    },
    {
      file: 'k(1).png',
      location: 'Sirmilik National Park, Canada',
      lat: 72.083639,
      lon: -76.811917,
      coords_dms: "72°05'01.1\" N 76°48'42.9\" W"
    }
  ],
  'l': [
    {
      file: 'l.png',
      location: 'Regina, Saskatchewan, Canada',
      lat: 50.211472,
      lon: -104.727278,
      coords_dms: "50°12'41.3\" N 104°43'38.1\" W"
    },
    {
      file: 'l(1).png',
      location: 'Xinjiang, China',
      lat: 40.067444,
      lon: 77.666861,
      coords_dms: "40°04'02.8\" N 77°40'00.7\" E"
    },
    {
      file: 'l(2).png',
      location: 'Nusantara, Indonesia',
      lat: -0.971694,
      lon: 116.699694,
      coords_dms: "0°58'18.1\" S 116°41'58.9\" E"
    }
  ],
  'm': [
    {
      file: 'm.png',
      location: 'Shenandoah River, Virginia',
      lat: 38.775611,
      lon: -78.401972,
      coords_dms: "38°46'32.2\" N 78°24'07.1\" W"
    },
    {
      file: 'm(1).png',
      location: 'Potomac River',
      lat: 38.775611,
      lon: -78.401972,
      coords_dms: "38°46'32.2\" N 78°24'07.1\" W"
    }
  ],
  'n': [
    {
      file: 'n.png',
      location: 'Yapacani, Bolivia',
      lat: -17.30825,
      lon: -63.888611,
      coords_dms: "17°18'29.7\" S 63°53'19.0\" W"
    },
    {
      file: 'n(1).png',
      location: 'Yapacani, Bolivia',
      lat: -17.30825,
      lon: -63.888611,
      coords_dms: "17°18'29.7\" S 63°53'19.0\" W"
    },
    {
      file: 'n(2).png',
      location: 'São Miguel do Araguaia, Brazil',
      lat: -12.945639,
      lon: -50.495,
      coords_dms: "12°56'44.3\" S 50°29'42.0\" W"
    }
  ],
  'o': [
    {
      file: 'o.png',
      location: 'Crater Lake, Oregon',
      lat: 42.936111,
      lon: -122.101306,
      coords_dms: "42°56'10.0\" N 122°06'04.7\" W"
    }
  ],
  'p': [
    {
      file: 'p.png',
      location: 'Mackenzie River Delta, Canada',
      lat: 68.215111,
      lon: -134.387583,
      coords_dms: "68°12'54.4\" N 134°23'15.3\" W"
    },
    {
      file: 'p(1).png',
      location: 'Riberalta, Bolivia',
      lat: -10.878889,
      lon: -66.047778,
      coords_dms: "10°52'44.0\" S 66°02'52.0\" W"
    }
  ],
  'q': [
    {
      file: 'q.png',
      location: 'Lonar Crater, India',
      lat: 19.976889,
      lon: 76.5085,
      coords_dms: "19°58'36.8\" N 76°30'30.6\" E"
    },
    {
      file: 'q(1).png',
      location: 'Mount Tambora, Indonesia',
      lat: -8.242028,
      lon: 117.992,
      coords_dms: "8°14'31.3\" S 117°59'31.2\" E"
    }
  ],
  'r': [
    {
      file: 'r.png',
      location: 'Canyonlands National Park, Utah',
      lat: 38.441056,
      lon: -109.750917,
      coords_dms: "38°26'27.8\" N 109°45'03.3\" W"
    },
    {
      file: 'r(1).png',
      location: 'Province of Sondrio, Italy',
      lat: 46.294,
      lon: 9.420694,
      coords_dms: "46°17'38.3\" N 9°25'14.5\" E"
    }
  ],
  's': [
    {
      file: 's.png',
      location: 'N’Djamena, Chad',
      lat: 12.007694,
      lon: 15.062833,
      coords_dms: "12°00'27.7\" N 15°03'46.2\" E"
    },
    {
      file: 's(1).png',
      location: 'Rio Chapare, Bolivia',
      lat: -16.934639,
      lon: -65.229,
      coords_dms: "16°56'04.7\" S 65°13'44.2\" W"
    },
    {
      file: 's(2).png',
      location: 'Mackenzie River',
      lat: 68.416944,
      lon: -134.143111,
      coords_dms: "68°25'01.0\" N 134°08'35.2\" W"
    }
  ],
  't': [
    {
      file: 't.png',
      location: 'Lena River Delta',
      lat: 72.877861,
      lon: 129.530972,
      coords_dms: "72°52'40.3\" N 129°31'51.5\" E"
    },
    {
      file: 't(1).png',
      location: 'Liwa, United Arab Emirates',
      lat: 23.175,
      lon: 53.798,
      coords_dms: "23°10'30.0\" N 53°47'52.8\" E"
    }
  ],
  'u': [
    {
      file: 'u.png',
      location: 'Canyonlands National Park, Utah',
      lat: 38.269194,
      lon: -109.92575,
      coords_dms: "38°16'09.1\" N 109°55'32.7\" W"
    },
    {
      file: 'u(1).png',
      location: 'Bamforth National Wildlife Refuge, Wyoming',
      lat: 41.323889,
      lon: -105.770528,
      coords_dms: "41°19'26.0\" N 105°46'13.9\" W"
    }
  ],
  'v': [
    {
      file: 'v.png',
      location: 'Cellina and Meduna Rivers, Italy',
      lat: 46.1115,
      lon: 12.757389,
      coords_dms: "46°06'41.4\" N 12°45'26.6\" E"
    },
    {
      file: 'v(1).png',
      location: 'Padma River, Bangladesh',
      lat: 23.351083,
      lon: 90.551917,
      coords_dms: "23°21'03.9\" N 90°33'06.9\" E"
    },
    {
      file: 'v(2).png',
      location: 'Mapleton, Maine',
      lat: 46.544583,
      lon: -68.251778,
      coords_dms: "46°32'40.5\" N 68°15'06.4\" W"
    },
    {
      file: 'v(3).png',
      location: 'New South Wales, Australia',
      lat: -34.286444,
      lon: 150.825667,
      coords_dms: "34°17'11.2\" S 150°49'32.4\" E"
    }
  ],
  'w': [
    {
      file: 'w.png',
      location: 'Ponoy River, Russia',
      lat: 67.036361,
      lon: 40.338694,
      coords_dms: "67°02'10.9\" N 40°20'19.3\" E"
    },
    {
      file: 'w(1).png',
      location: 'La Primavera, Colombia',
      lat: 5.449417,
      lon: -69.799167,
      coords_dms: "5°26'57.9\" N 69°47'57.0\" W"
    }
  ],
  'x': [
    {
      file: 'x.png',
      location: 'Sermersooq Municipality, Greenland',
      lat: 66.618111,
      lon: -36.368306,
      coords_dms: "66°37'05.2\" N 36°22'05.9\" W"
    },
    {
      file: 'x(1).png',
      location: 'Wolstenholme Fjord, Greenland',
      lat: 76.734389,
      lon: -68.606472,
      coords_dms: "76°44'03.8\" N 68°36'23.3\" W"
    },
    {
      file: 'x(2).png',
      location: 'Davis Straight, Greenland',
      lat: 62.237444,
      lon: -49.580528,
      coords_dms: "62°14'14.8\" N 49°34'49.9\" W"
    }
  ],
  'y': [
    {
      file: 'y.png',
      location: 'Estuario de Virrila, Peru',
      lat: -5.864833,
      lon: -80.731,
      coords_dms: "5°51'53.4\" S 80°43'51.6\" W"
    },
    {
      file: 'y(1).png',
      location: 'Bíobío River, Chile',
      lat: -37.267333,
      lon: -72.7285,
      coords_dms: "37°16'02.4\" S 72°43'42.9\" W"
    }
  ],
  'z': [
    {
      file: 'z.png',
      location: 'Primavera do Leste, Brazil',
      lat: -15.494139,
      lon: -54.340972,
      coords_dms: "15°29'38.9\" S 54°20'27.5\" W"
    },
    {
      file: 'z(1).png',
      location: 'Mohammed Boudiaf, Algeria',
      lat: 34.988694,
      lon: 4.389111,
      coords_dms: "34°59'19.3\" N 4°23'20.8\" E"
    }
  ]
};

// Optional: make it available globally
if (typeof module !== 'undefined' && module.exports) {
  module.exports = earthDatabase;
}
