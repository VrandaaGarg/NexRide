const VehicleData = [
  {
    id: 1,
    imgUrl: "https://media.atherenergy.com/450X_LunarGrey_Hero_result.webp",
    model: "Ather 450X",
    brand: "Ather",
    budget: "139000",
    range: "116",
  },
  {
    id: 2,
    imgUrl:
      "https://www.chetak.com/images/scooter/electric-scooter/chetak-premium-hazelnut.webp",
    model: "Bajaj Chetak",
    brand: "Bajaj",
    budget: "149000",
    range: "95",
  },
  {
    id: 3,
    imgUrl:
      "https://d12d6l12s3d372.cloudfront.net/v1_Plus_everyone_905db1b7b6.png",
    model: "Hero Vida V1 Pro",
    brand: "Hero",
    budget: "159000",
    range: "165",
  },
  {
    id: 4,
    imgUrl:
      "https://ev-india-bucket.s3.ap-south-1.amazonaws.com/uploads/vehicle_image/41d7b18b1018196e770fd2bdc6bf82b8",
    model: "TVS iQube",
    brand: "TVS",
    budget: "119000",
    range: "100",
  },
  {
    id: 5,
    model: "Ola S1 Pro",
    imgUrl:
      "https://cdn.olaelectric.com/sites/evdp/pages/s1pro/comparison_box_s1_pro_v5.webp",
    brand: "Ola",
    budget: "129999",
    range: "181",
  },
  {
    id: 6,
    model: "Okinawa PraisePro",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2023/9/342441640/SI/XW/ED/91667407/o1.png",
    brand: "Okinawa",
    budget: "119000",
    range: "140",
  },
  {
    id: 7,
    model: "Ampere Zeal EX",
    imgUrl: "https://accormotors.com/images/tabs/ZealBlack.png",
    brand: "Ampere",
    budget: "74000",
    range: "75",
  },
  {
    id: 8,
    model: "Hero Electric Optima HX",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/9/CD/VU/RS/90566874/hero-electric-optima-cx-500x500.png",
    brand: "Hero Electric",
    budget: "65000",
    range: "82",
  },
  {
    id: 9,
    model: "Evolet Derby",
    imgUrl:
      "https://cdn.prod.website-files.com/6421f175dc83531b27d895f4/647bd294017a9563bc492f47_deep%20red%20polo%20for%20website.webp",
    brand: "Evolet",
    budget: "65000",
    range: "100",
  },
  {
    id: 11,
    model: "Vespa Elettrica",
    imgUrl:
      "https://centralization-images.s3.ap-south-1.amazonaws.com/1_Vespa_Elettrica_b23fcc507a.png",
    brand: "Vespa",
    budget: "150000",
    range: "100",
  },
  {
    id: 12,
    model: "Evolet Polo",
    imgUrl:
      "https://centralization-images.s3.ap-south-1.amazonaws.com/evolet_polo_classic_2_cdc0fe6b73.png",
    brand: "Evolet",
    budget: "60000",
    range: "90",
  },
  {
    id: 13,
    model: "Ather 450 Plus",
    imgUrl:
      "https://images.jdmagicbox.com/quickquotes/images_main/450-plus-space-grey-270817450-xutn4541.png",
    brand: "Ather",
    budget: "109000",
    range: "85",
  },
  {
    id: 14,
    model: "Gogoro VIVA",
    imgUrl:
      "https://support.gogoro.com/tw/troubleshooting_selfservice/assets/img-scooter-menu-viva-my22@2x.png",
    brand: "Gogoro",
    budget: "85000",
    range: "90",
  },

  {
    id: 19,
    model: "Kinetic Green Zing",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2022/8/HK/TI/UO/67718623/kinetic-zoom-big-b.png",
    brand: "Kinetic Green",
    budget: "65000",
    range: "75",
  },
  {
    id: 20,
    model: "Bharat EV Scooty",
    imgUrl:
      "https://5.imimg.com/data5/SELLER/Default/2024/2/393506563/AO/IH/AY/211622454/ev-scooty-bharat-3-0-250x250.png",
    brand: "Bharat",
    budget: "70000",
    range: "80",
  },
  {
    id: 21,
    model: "Ampere Magnus EX",
    imgUrl:
      "https://ev-india-bucket.s3.ap-south-1.amazonaws.com/uploads/vehicle_image/a700385f01b257c414cabb29a3f8ccaa",
    brand: "Ampere",
    budget: "85000",
    range: "80",
  },
  {
    id: 22,
    model: "Hero Electric Flash",
    imgUrl:
      "https://heroelectric.in/wp-content/uploads/2021/02/Atria-gallery-1.png",
    brand: "Hero Electric",
    budget: "65000",
    range: "70",
  },
  {
    id: 23,
    model: "Okinawa Lite",
    imgUrl:
      "https://okinawascooters.com/Uploads/ProductsImage/lite-banner.webp",
    brand: "Okinawa",
    budget: "58000",
    range: "60",
  },
  {
    id: 25,
    model: "Yulu eScooter",
    imgUrl: "https://buy.yulu.bike/main_assets/img/easy/white_2.png",
    brand: "Yulu",
    budget: "40000",
    range: "25",
  },

  {
    id: 28,
    model: "Avan Xero Plus",
    imgUrl: "https://5.imimg.com/data5/NE/ZI/AX/SELLER-56285201/a-500x500.png",
    brand: "Avan Motors",
    budget: "90000",
    range: "80",
  },

  {
    id: 33,
    model: "Simple One",
    imgUrl:
      "https://ev-india-bucket.s3.ap-south-1.amazonaws.com/uploads/vehicle_image/1d5cea30ff582393ad250e1a5cb9e8db",
    brand: "Simple Energy",
    budget: "150000",
    range: "300",
  },
  {
    id: 34,
    model: "Evolet Derby Plus",
    imgUrl:
      "https://centralization-images.s3.ap-south-1.amazonaws.com/evolet_derby_classic_1_84b847e033.png",
    brand: "Evolet",
    budget: "75000",
    range: "100",
  },
  {
    id: 35,
    model: "Vespa GTS Electric",
    imgUrl:
      "https://images.piaggio.com/vespa/vehicles/nvf9000u01/nvf9a1du01/nvf9a1du01-01-s.png",
    brand: "Vespa",
    budget: "160000",
    range: "100",
  },
  {
    id: 36,
    model: "Hero Electric Nyx",
    imgUrl:
      "https://chybmedia.s3.ap-south-1.amazonaws.com/models/bikes/nyx--hx-60-374.png",
    brand: "Hero Electric",
    budget: "90000",
    range: "80",
  },
  {
    id: 37,
    imgUrl:
      "https://images.91wheels.com/assets/b_images/main/models/profile/profile1703060030.png?width=420&q=60?w=420&q=60",
    model: "Lohia Mindy",
    brand: "Lohia",
    budget: "70000",
    range: "70",
  },
  {
    id: 38,
    model: "Niu MQi+",
    brand: "Niu",
    imgUrl:
      "https://s.niucache.com/static-shop/NiuI18n/m-plus/section24_bg_car.png",
    budget: "85000",
    range: "50",
  },
  {
    id: 39,
    model: "Ampere REO",
    imgUrl:
      "https://5.imimg.com/data5/VW/OO/ST/SELLER-41886942/ampere-reo-electric-bike-500x500.png",
    brand: "Ampere",
    budget: "60000",
    range: "60",
  },
  {
    id: 40,
    model: "Elan E-Dragon",
    imgUrl:
      "https://velozelectric.com.au/cdn/shop/files/PREDATOR.webp?v=1713264566",
    brand: "Elan",
    budget: "80000",
    range: "85",
  },
];

export default VehicleData;
