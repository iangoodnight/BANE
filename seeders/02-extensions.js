'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkInsert('Extensions', [
        {
          "ext": 170,
          "type": "52xx/53xx",
          "description": "1800 Front Office",
          "username": "1800 Front Office",
          "macAddress": "08:00:0F:6D:41:B2",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 135,
          "type": "52xx/53xx",
          "description": "1830 Dock",
          "username": "1830 Dock",
          "macAddress": "08:00:0F:96:D9:9E",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2300
        },
        {
          "ext": 114,
          "type": "52xx/53xx",
          "description": "Hayes, John",
          "username": "John Hayes",
          "macAddress": "08:00:0F:9D:0E:DC",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2364
        },
        {
          "ext": 159,
          "type": "52xx/53xx",
          "description": "Dohm, Aaron",
          "username": "Aaron Dohm",
          "macAddress": "08:00:0F:52:B1:31",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3476
        },
        {
          "ext": 158,
          "type": "52xx/53xx",
          "description": "Amazon",
          "username": "Amazon",
          "macAddress": "08:00:0F:6D:E0:B1",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 131,
          "type": "52xx/53xx",
          "description": "Brown, Andrew",
          "username": "Andrew Brown",
          "macAddress": "08:00:0F:8D:AD:D2",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3774
        },
        {
          "ext": 144,
          "type": "52xx/53xx",
          "description": "Pittman, Angela",
          "username": "Angela Pittman",
          "macAddress": "08:00:0F:6D:3F:C5",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 178,
          "type": "52xx/53xx",
          "description": "Perruchon, Aron",
          "username": "Aron Perruchon",
          "macAddress": "08:00:0F:4F:4B:EE",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3400
        },
        {
          "ext": 119,
          "type": "52xx/53xx",
          "description": "Boxes Plus at 1800 Warehouse",
          "username": "Boxes Plus",
          "macAddress": "08:00:0F:A0:40:7C",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 145,
          "type": "52xx/53xx",
          "description": "Bonjack, Brian",
          "username": "Brian Bonjack",
          "macAddress": "08:00:0F:4F:3D:38",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2720
        },
        {
          "ext": 142,
          "type": "52xx/53xx",
          "description": "Putka, Brian",
          "username": "Brian Putka",
          "macAddress": "08:00:0F:48:58:0F",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2379
        },
        {
          "ext": 104,
          "type": "52xx/53xx",
          "description": "Pellegrino,Bryan",
          "username": "Bryan Pellegrino",
          "macAddress": "08:00:0F:6C:A0:86",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 162,
          "type": "52xx/53xx",
          "description": "Rouse, Cayce",
          "username": "Cayce Rouse",
          "macAddress": "08:00:0F:6C:1D:60",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2456
        },
        {
          "ext": 130,
          "type": "52xx/53xx",
          "description": "Patterson, Chris",
          "username": "Chris Patterson",
          "macAddress": "08:00:0F:8D:AD:3E",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3068
        },
        {
          "ext": 133,
          "type": "52xx/53xx",
          "description": "Allen, Christa",
          "username": "Christa Allen",
          "macAddress": "08:00:0F:86:62:8A",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2673
        },
        {
          "ext": 138,
          "type": "52xx/53xx",
          "description": "Center, Command",
          "username": "CMD Center",
          "macAddress": "08:00:0F:7F:27:F0",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3263
        },
        {
          "ext": 169,
          "type": "52xx/53xx",
          "description": "Houston, Constance",
          "username": "Constance Houston",
          "macAddress": "08:00:0F:48:44:C3",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3418
        },
        {
          "ext": 165,
          "type": "52xx/53xx",
          "description": "Counting",
          "username": "Counting",
          "macAddress": "08:00:0F:A0:B6:47",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 124,
          "type": "52xx/53xx",
          "description": "Customer Pickup",
          "username": "Customer Pickup",
          "macAddress": "08:00:0F:9D:0F:8E",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 101,
          "type": "52xx/53xx",
          "description": "Frenz,Dan",
          "username": "Dan Frenz",
          "macAddress": "08:00:0F:6D:D6:C2",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 1054
        },
        {
          "ext": 128,
          "type": "52xx/53xx",
          "description": "Holzheimer,Dan",
          "username": "Dan Holzheimer",
          "macAddress": "08:00:0F:8D:AD:64",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2203
        },
        {
          "ext": 151,
          "type": "52xx/53xx",
          "description": "Smith, Dan",
          "username": "Dan Smith",
          "macAddress": "08:00:0F:9B:A3:09",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3292
        },
        {
          "ext": 179,
          "type": "52xx/53xx",
          "description": "Smith, Domnici",
          "username": "Domnici Smith",
          "macAddress": "08:00:0F:4F:4B:AD",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3511
        },
        {
          "ext": 100,
          "type": "52xx/53xx",
          "description": "Dunham, Veronica",
          "username": "Dr. Dunham",
          "macAddress": "08:00:0F:6D:D8:00",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3559
        },
        {
          "ext": 116,
          "type": "52xx/53xx",
          "description": "Hayes,Ellie",
          "username": "Ellie Hayes",
          "macAddress": "08:00:0F:6D:D6:D7",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2827
        },
        {
          "ext": 172,
          "type": "52xx/53xx",
          "description": "Shepard, Eric",
          "username": "Eric Shepard",
          "macAddress": "08:00:0F:3B:D0:F3",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2989
        },
        {
          "ext": 107,
          "type": "52xx/53xx",
          "description": "Owens,Faith",
          "username": "Faith Owens",
          "macAddress": "08:00:0F:6D:D6:BC",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2331
        },
        {
          "ext": 220,
          "type": "52xx/53xx",
          "description": "Fashion 220",
          "username": "Fashion 220",
          "macAddress": "08:00:0F:91:F8:11",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 106,
          "type": "52xx/53xx",
          "description": "Bulk Front Desk",
          "username": "Front Desk",
          "macAddress": "08:00:0F:85:31:05",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 103,
          "type": "52xx/53xx",
          "description": "Pellegrino,Gary",
          "username": "Gary Sr.",
          "macAddress": "08:00:0F:6A:46:03",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 155,
          "type": "52xx/53xx",
          "description": "Evans, Hailey",
          "username": "Hailey Evans",
          "macAddress": "",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3692
        },
        {
          "ext": 126,
          "type": "52xx/53xx",
          "description": "Holmberg,Heather",
          "username": "Heather Holmberg",
          "macAddress": "08:00:0F:89:B4:29",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2686
        },
        {
          "ext": 110,
          "type": "52xx/53xx",
          "description": "Goodnight, Ian",
          "username": "Ian Goodnight",
          "macAddress": "08:00:0F:48:48:B3",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3693
        },
        {
          "ext": 117,
          "type": "52xx/53xx",
          "description": "Inventory",
          "username": "Inventory",
          "macAddress": "08:00:0F:44:D7:1F",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 146,
          "type": "52xx/53xx",
          "description": "IT Helpdesk",
          "username": "IT Helpdesk",
          "macAddress": "08:00:0F:98:3F:B6",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3387
        },
        {
          "ext": 123,
          "type": "52xx/53xx",
          "description": "Ruby,James",
          "username": "James Ruby",
          "macAddress": "08:00:0F:7D:14:DC",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2499
        },
        {
          "ext": 137,
          "type": "52xx/53xx",
          "description": "Proudfoot,Janet",
          "username": "Janet Proudfoot",
          "macAddress": "08:00:0F:96:DC:8B",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2423
        },
        {
          "ext": 148,
          "type": "52xx/53xx",
          "description": "Campbell, Jayme",
          "username": "Jayme Campbell",
          "macAddress": "08:00:0F:9B:A2:E1",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3129
        },
        {
          "ext": 164,
          "type": "52xx/53xx",
          "description": "Roose, Jennifer",
          "username": "Jennifer Roosa",
          "macAddress": "08:00:0F:A0:B5:F7",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3749
        },
        {
          "ext": 150,
          "type": "52xx/53xx",
          "description": "Fletcher,Jeremy",
          "username": "Jeremy Fletcher",
          "macAddress": "08:00:0F:77:2E:53",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 125,
          "type": "52xx/53xx",
          "description": "Whitmore, Jerrisha",
          "username": "Jerrisha Whitmore",
          "macAddress": "08:00:0F:6E:E9:4E",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3773
        },
        {
          "ext": 105,
          "type": "52xx/53xx",
          "description": "Wilson,Jesse",
          "username": "Jesse Wilson",
          "macAddress": "08:00:0F:8D:AE:32",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2707
        },
        {
          "ext": 152,
          "type": "52xx/53xx",
          "description": "Gerrick, Jill",
          "username": "Jill Gerrick",
          "macAddress": "08:00:0F:9D:0F:8A",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3174
        },
        {
          "ext": 120,
          "type": "52xx/53xx",
          "description": "Jodie Thompson",
          "username": "Jodie Thompson",
          "macAddress": "08:00:0F:7C:0D:C0",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3740
        },
        {
          "ext": 167,
          "type": "52xx/53xx",
          "description": "Halling, John",
          "username": "John Halling",
          "macAddress": "08:00:0F:A0:B6:8A",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2890
        },
        {
          "ext": 147,
          "type": "52xx/53xx",
          "description": "Hurd, John",
          "username": "John Hurd",
          "macAddress": "08:00:0F:84:09:1A",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 176,
          "type": "52xx/53xx",
          "description": "Ext. 176, New Phone",
          "username": "Joshua Spencer",
          "macAddress": "08:00:0F:4F:42:EA",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3772
        },
        {
          "ext": 177,
          "type": "52xx/53xx",
          "description": "Holcomb, Kenady",
          "username": "Kenady Holcomb",
          "macAddress": "08:00:0F:42:A6:C3",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2340
        },
        {
          "ext": 175,
          "type": "52xx/53xx",
          "description": "Steels, Mackenzie",
          "username": "Kenzie Steels",
          "macAddress": "08:00:0F:AA:A0:E4",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3608
        },
        {
          "ext": 122,
          "type": "52xx/53xx",
          "description": "Barnett, Kevin",
          "username": "Kevin Barnett",
          "macAddress": "08:00:0F:42:A6:B7",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3226
        },
        {
          "ext": 141,
          "type": "52xx/53xx",
          "description": "",
          "username": "Kyle Wells",
          "macAddress": "08:00:0F:7F:26:2D",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2786
        },
        {
          "ext": 134,
          "type": "52xx/53xx",
          "description": "Lab",
          "username": "Lab",
          "macAddress": "08:00:0F:96:DC:FC",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 111,
          "type": "52xx/53xx",
          "description": "Lab Office",
          "username": "Lab Office",
          "macAddress": "08:00:0F:6D:D8:93",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 115,
          "type": "52xx/53xx",
          "description": "Pellegrino,Linda",
          "username": "Linda Pellegrino",
          "macAddress": "08:00:0F:78:95:BC",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 140,
          "type": "52xx/53xx",
          "description": "Truck Order Area",
          "username": "LTL",
          "macAddress": "08:00:0F:6E:E9:4E",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 121,
          "type": "52xx/53xx",
          "description": "Machine Maintenance",
          "username": "Machine Maintenance",
          "macAddress": "08:00:0F:7C:E4:ED",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 1830,
          "type": "52xx/53xx",
          "description": "Maintenance at 1830",
          "username": "Maintenance 1830",
          "macAddress": "08:00:0F:8D:A9:4F",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 153,
          "type": "52xx/53xx",
          "description": "Carlson, Megan",
          "username": "Megan Carlson",
          "macAddress": "08:00:0F:40:ED:95",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3423
        },
        {
          "ext": 166,
          "type": "52xx/53xx",
          "description": "Melanie Sugalski",
          "username": "Melanie Sugalski",
          "macAddress": "08:00:0F:AA:A0:97",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3631
        },
        {
          "ext": 127,
          "type": "52xx/53xx",
          "description": "Siepierski, Meredith",
          "username": "Meredith Siepierski",
          "macAddress": "08:00:0F:8D:AC:C3",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 156,
          "type": "52xx/53xx",
          "description": "Haslett, Michelle",
          "username": "Michelle Haslett",
          "macAddress": "08:00:0F:9C:F4:22",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3597
        },
        {
          "ext": 171,
          "type": "52xx/53xx",
          "description": "Obitts, Morgan",
          "username": "Morgan Obitts",
          "macAddress": "08:00:0F:58:90:91",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3363
        },
        {
          "ext": 168,
          "type": "52xx/53xx",
          "description": "Spence, Mary",
          "username": "Ms Mary",
          "macAddress": "08:00:0F:58:71:16",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2370
        },
        {
          "ext": 132,
          "type": "52xx/53xx",
          "description": "Stoll, Nick",
          "username": "Nick Stoll",
          "macAddress": "08:00:0F:91:FA:E0",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2041
        },
        {
          "ext": 108,
          "type": "52xx/53xx",
          "description": "Hewston, Patrick",
          "username": "Patrick Hewston",
          "macAddress": "08:00:0F:42:E1:87",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3629
        },
        {
          "ext": 102,
          "type": "52xx/53xx",
          "description": "Provenzale,Paul",
          "username": "Paul Provenzale",
          "macAddress": "08:00:0F:6D:D6:A5",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2043
        },
        {
          "ext": 139,
          "type": "52xx/53xx",
          "description": "Quality on the Dock",
          "username": "QA Dock",
          "macAddress": "08:00:0F:3D:EE:79",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 129,
          "type": "52xx/53xx",
          "description": "Now, Lip Balm",
          "username": "Sara Eckhoff",
          "macAddress": "08:00:0F:6C:9D:29",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2871
        },
        {
          "ext": 1954,
          "type": "52xx/53xx",
          "description": "Security",
          "username": "Security",
          "macAddress": "08:00:0F:83:4A:EE",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 113,
          "type": "52xx/53xx",
          "description": "Triplett,Sheldon",
          "username": "Sheldon Triplett",
          "macAddress": "08:00:0F:6D:D7:CB",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2533
        },
        {
          "ext": 118,
          "type": "52xx/53xx",
          "description": "Shipping and Receiving",
          "username": "Shipping and Receiving",
          "macAddress": "08:00:0F:78:94:A3",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        },
        {
          "ext": 174,
          "type": "52xx/53xx",
          "description": "Brown, Stacy",
          "username": "Stacy Brown",
          "macAddress": "08:00:0F:6D:DA:BA",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3655
        },
        {
          "ext": 149,
          "type": "52xx/53xx",
          "description": "Cole, Stephanie",
          "username": "Stephanie Cole",
          "macAddress": "08:00:0F:77:30:9A",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2817
        },
        {
          "ext": 109,
          "type": "52xx/53xx",
          "description": "Spence,Teresa",
          "username": "Teresa Spence",
          "macAddress": "08:00:0F:6D:D7:F8",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 2185
        },
        {
          "ext": 143,
          "type": "52xx/53xx",
          "description": "Wallschleager, Trish",
          "username": "Trish Wallschleager",
          "macAddress": "08:00:0F:8B:95:CD",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": 3468
        },
        {
          "ext": 161,
          "type": "52xx/53xx",
          "description": "Validations Office at 1800",
          "username": "Validations Office",
          "macAddress": "08:00:0F:42:E2:52",
          "createdAt": "2019-04-13",
          "updatedAt": "2019-04-13",
          "employeeId": null
        }
      ], {}
    );
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Extensions', null, {});
    
  }
};