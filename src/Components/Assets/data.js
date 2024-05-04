import p1_img from './salame.png';
import p2_img from './frutti_dimare.png';
import p3_img from './salatka_zgruszka.png';
import p4_img from './tiramisu.png';

let data_product = [
   {
      id: 16,
      name: 'Salame',
      image: p1_img,
      desc: 'sos pomidorowy, salami, ser mozzarella, oregano',
      priceM: 30,
      priceL: 39,
   },
   {
      id: 23,
      name: 'Frutti Di Mare',
      image: p2_img,
      desc: 'sos pomidorowy lub oliwa, ser mozzarella, krewetki, mięso małży, ośmiorniczki baby, siekana natka pietruszki, oregano',
      priceM: 37,
      priceL: 45,
   },
   {
      id: 30,
      name: 'Sałatka z Gruszką',
      desc: 'gruszka w syropie, rukola, orzechy, sery: gorgonzola, lazur, sos miodowo-musztardowy',
      image: p3_img,
      priceM: 26,
      priceL: 34,
   },
   {
      id: 33,
      name: 'Tiramisu',
      desc: 'włoski deser z mascarpone i biszkoptów nasączonych espresso z nutą alkoholu',
      image: p4_img,
      priceM: 22,
      priceL: 33,
   },
];

export default data_product;
