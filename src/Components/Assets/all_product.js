import p1_img from './spaghetti_napoli.png';
import p2_img from './spaghetti_bolognese.png';
import p3_img from './spaghetti_carbonara.png';
import p4_img from './aglioolio_epeperoncino.png';
import p5_img from './lasagne.png';
import p6_img from './gnocchi_spinaci.png';
import p7_img from './gnocchi_wolo.png';
import p8_img from './crespelle.png';
import p9_img from './tagliatelle_dimare.png';
import p10_img from './tagliatelle_krewetki.png';
import p11_img from './pierogi_kaczka.png';
import p12_img from './penne_zkursal.png';
import p13_img from './margherita.png';
import p14_img from './roma.png';
import p15_img from './capricciosa.png';
import p16_img from './salame.png';
import p17_img from './piccante.png';
import p18_img from './dal_cuore.png';
import p19_img from './vegetariana.png';
import p20_img from './rucola.png';
import p21_img from './tonno.png';
import p22_img from './formaggio.png';
import p23_img from './frutti_dimare.png';
import p24_img from './pizza_zkrewetkami.png';
import p25_img from './bruschetta.png';
import p26_img from './carpaccio.png';
import p27_img from './focaccia.png';
import p28_img from './krewetki_wwinie.png';
import p29_img from './krem_zpomidorow.png';
import p30_img from './salatka_zgruszka.png';
import p31_img from './salatka_zkurczakiem.png';
import p32_img from './salatka_zkrewetkami.png';
import p33_img from './tiramisu.png';
import p34_img from './panna_cotta.png';
import p35_img from './oliwa.png';
import p36_img from './rucola_dodatek.png';
import p37_img from './saltimbocca.png';
import p38_img from './gulasz_reposo.png';
import p39_img from './salatka_tunczyk.png';
import p40_img from './salatka_tunczyk.png';
import p41_img from './creme_brulee.png';
import p42_img from './puchar_lodowy.png';
import p43_img from './gnocchi.png';
import p44_img from './kompozycja_salat.png';
import p45_img from './oliwki.png';

let all_product = [
   {
      id: 1,
      name: 'Spaghetti Napoli',
      desc: 'klasyczny sos pomidorowy z ziołami, parmezan',
      category: 'dania',
      image: p1_img,
      priceM: 24,
      priceL: 32,
   },
   {
      id: 2,
      name: 'Spaghetti Bolognese',
      desc: 'znakomity sos z mięsa mielonego z pomidorami, parmezan',
      category: 'dania',
      image: p2_img,
      priceM: 26,
      priceL: 34,
   },
   {
      id: 3,
      name: 'Spaghetti Carbonara',
      desc: 'boczek, jajko, śmietana, czosnek, parmezan, pietruszka zielona',
      category: 'dania',
      image: p3_img,
      priceM: 25,
      priceL: 33,
   },
   {
      id: 4,
      name: 'Aglio, Olio E Peperoncino',
      desc: 'oliwa, czosnek, ostra papryczka, pietruszka zielona, parmezan',
      category: 'dania',
      image: p4_img,
      priceM: 23,
      priceL: 31,
   },
   {
      id: 5,
      name: 'Lasagne',
      desc: 'z mięsem wołowym',
      category: 'dania',
      image: p5_img,
      priceM: 30,
      priceL: 40,
   },
   {
      id: 6,
      name: 'Gnocchi Spinaci',
      desc: 'włoskie kluseczki ze szpinakiem i ricottą, czosnek, parmezan',
      category: 'dania',
      image: p6_img,
      priceM: 27,
      priceL: 36,
   },
   {
      id: 7,
      name: 'Gnocchi z Szarpaną Wołowiną',
      desc: 'w sosie pomidorowym z nutą pomarańczy posypane parmezanem i pietruszką',
      category: 'dania',
      image: p7_img,
      priceM: 32,
      priceL: 41,
   },
   {
      id: 8,
      name: 'Crespelle',
      desc: 'zapiekane włoskie naleśniki z szynką parmeńską i szpinakiem z ricottą w sosie serowym',
      category: 'dania',
      image: p8_img,
      priceM: 28,
      priceL: 39,
   },
   {
      id: 9,
      name: 'Tagliatelle Frutti Di Mare',
      desc: 'z mieszanymi owocami morza: mięso małży, ośmiorniczki baby, krewetki, białe wino, czosnek, pietruszka zielona',
      category: 'dania',
      image: p9_img,
      priceM: 38,
      priceL: 46,
   },
   {
      id: 10,
      name: 'Tagliatelle z Krewetkami',
      desc: 'krewetki, białe wino, czosnek, pietruszka zielona',
      category: 'dania',
      image: p10_img,
      priceM: 36,
      priceL: 44,
   },
   {
      id: 11,
      name: 'Pierogi z Mięsem z Kaczki',
      desc: 'okraszone złocistą cebulką, podane z żurawiną',
      category: 'dania',
      image: p11_img,
      priceM: 29,
      priceL: 38,
   },
   {
      id: 12,
      name: 'Penne z Kurczakiem i Pikantnym Salami',
      desc: 'sos śmietanowy, kurczak, pikantne salami ,groszek cukrowy, czosnek, śmietana, rukola, pietruszka zielona, parmezan',
      category: 'dania',
      image: p12_img,
      priceM: 30,
      priceL: 40,
   },
   {
      id: 13,
      name: 'Margherita',
      desc: 'sos pomidorowy (lub oliwa), ser mozzarella, oregano',
      category: 'pizze',
      image: p13_img,
      priceM: 22,
      priceL: 30,
   },
   {
      id: 14,
      name: 'Roma',
      desc: 'sos pomidorowy, szynka, ser mozzarella, oregano',
      category: 'pizze',
      image: p14_img,
      priceM: 26,
      priceL: 33,
   },
   {
      id: 15,
      name: 'Capricciosa',
      desc: 'sos pomidorowy, pieczarki, szynka, pomidorki, ser mozzarella, oregano',
      category: 'pizze',
      image: p15_img,
      priceM: 30,
      priceL: 40,
   },
   {
      id: 16,
      name: 'Salame',
      desc: 'sos pomidorowy, salami, ser mozzarella, oregano',
      category: 'pizze',
      image: p16_img,
      priceM: 30,
      priceL: 39,
   },
   {
      id: 17,
      name: 'Piccante',
      desc: 'sos pomidorowy, salami włoskie pikantne, cebula czerwona, ostra papryczka, pomidorki koktajlowe, ser mozzarella, oregano',
      category: 'pizze',
      image: p17_img,
      priceM: 31,
      priceL: 41,
   },
   {
      id: 18,
      name: 'Dal Cuore',
      desc: 'oliwa czosnkowa, ser mozzarella, karczochy, suszone pomidory, oliwki, bazylia',
      category: 'pizze',
      image: p18_img,
      priceM: 28,
      priceL: 37,
   },
   {
      id: 19,
      name: 'Vegetariana',
      desc: 'oliwa, ser mozzarella, grillowane warzywa: cukinia, bakłażan, papryka czerwona, mozzarella di bufala, pomidorki koktajlowe, rukola, oregano',
      category: 'pizze',
      image: p19_img,
      priceM: 30,
      priceL: 40,
   },
   {
      id: 20,
      name: 'Rucola',
      desc: 'oliwa, szynka parmeńska, rukola,pomidorki koktajlowe, ser mozzarella, oregano',
      category: 'pizze',
      image: p20_img,
      priceM: 32,
      priceL: 41,
   },
   {
      id: 21,
      name: 'Tonno',
      desc: 'oliwa, tuńczyk, cebula czerwona, pomidorki koktajlowe, rukola, ser mozzarella, oregano',
      category: 'pizze',
      image: p21_img,
      priceM: 29,
      priceL: 38,
   },
   {
      id: 22,
      name: 'Formaggio',
      desc: 'oliwa, sery: mozzarella, gorgonzola, lazur, parmezan, oregano',
      category: 'pizze',
      image: p22_img,
      priceM: 33,
      priceL: 42,
   },
   {
      id: 23,
      name: 'Frutti Di Mare',
      desc: 'sos pomidorowy lub oliwa, ser mozzarella, krewetki, mięso małży, ośmiorniczki baby, siekana natka pietruszki, oregano',
      category: 'pizze',
      image: p23_img,
      priceM: 37,
      priceL: 45,
   },
   {
      id: 24,
      name: 'Z krewetkami',
      desc: 'sos pomidorowy lub oliwa, ser mozzarella, krewetki, siekana natka pietruszki, oregano',
      category: 'pizze',
      image: p24_img,
      priceM: 36,
      priceL: 43,
   },
   {
      id: 25,
      name: 'Bruschetta',
      desc: 'grzanki, pomidory, czosnek, oliwa, bazylia, pesto z rukoli, parmezan',
      category: 'przystawki',
      image: p25_img,
      priceM: 19,
      priceL: 25,
   },
   {
      id: 26,
      name: 'Carpaccio',
      desc: 'polędwica wołowa w cienko krojonych plastrach, oliwa, kapary, parmezan, rukola',
      category: 'przystawki',
      image: p26_img,
      priceM: 33,
      priceL: 44,
   },
   {
      id: 27,
      name: 'Focaccia',
      desc: 'wypiekane cienkie ciasto drożdżowe z oliwą, posypane rozmarynem i solą',
      category: 'przystawki',
      image: p27_img,
      priceM: 22,
      priceL: 28,
   },
   {
      id: 28,
      name: 'Krewetki w Białym Winie',
      desc: 'krewetki, białe wino,czosnek, masło, pietruszka zielona, grzanki czosnkowe',
      category: 'przystawki',
      image: p28_img,
      priceM: 32,
      priceL: 41,
   },
   {
      id: 29,
      name: 'Krem z Pomidorów',
      desc: 'pachnący krem ze słodkich pomidorów z nutą pesto z rukoli',
      category: 'przystawki',
      image: p29_img,
      priceM: 16,
      priceL: 23,
   },
   {
      id: 30,
      name: 'Z Gruszką',
      desc: 'gruszka w syropie, rukola, orzechy, sery: gorgonzola, lazur, sos miodowo-musztardowy',
      category: 'salatki',
      image: p30_img,
      priceM: 22,
      priceL: 30,
   },
   {
      id: 31,
      name: 'Z Kurczakiem',
      desc: 'grillowany filet z kurczaka podany na sałacie rzymskiej, pomidorki koktajlowe, ogórek zielony, czerwona cebula, sos jogurtowo ziołowy',
      category: 'salatki',
      image: p31_img,
      priceM: 27,
      priceL: 33,
   },
   {
      id: 32,
      name: 'Z Krewetkami',
      desc: 'krewetki grillowane, mango, podana na rzymskiej sałacie z pomidorkami koktajlowymi i prażoną cebulką, sos musztardowo-miodowy',
      category: 'salatki',
      image: p32_img,
      priceM: 31,
      priceL: 40,
   },
   {
      id: 33,
      name: 'Tiramisu',
      desc: 'włoski deser z mascarpone i biszkoptów nasączonych espresso z nutą alkoholu',
      category: 'desery',
      image: p33_img,
      priceM: 20,
      priceL: 30,
   },
   {
      id: 34,
      name: 'Panna Cotta',
      desc: 'klasyczny włoski deser śmietankowy z musem malinowym',
      category: 'desery',
      image: p34_img,
      priceM: 17,
      priceL: 24,
   },
   {
      id: 35,
      name: 'Oliwa ',
      desc: 'do wyboru: Extra Virgin, Czosnkowa, Pikantna',
      category: 'dodatki',
      image: p35_img,
      priceM: 3,
      priceL: 7,
   },
   {
      id: 36,
      name: 'Rukola',
      desc: 'świerze liście rukoli jako dodatek do pizzy',
      category: 'dodatki',
      image: p36_img,
      priceM: 2,
      priceL: 4,
   },
   {
      id: 37,
      name: 'Filet z Kurczaka z Grilla',
      desc: 'z serem ricotta i suszonymi pomidorami, gnocchi z pesto z rukoli, kompozycja sałat z warzywami w sosie vinaigrette',
      category: 'dania',
      image: p37_img,
      priceM: 36,
      priceL: 44,
   },
   {
      id: 38,
      name: 'Saltimbocca alla Romana',
      desc: 'eskalopki wieprzowe z szynką parmeńską w sosie na bazie białego wina, gnocchi, sałatka z pomidorków koktajlowych z miętą i oliwą',
      category: 'dania',
      image: p38_img,
      priceM: 37,
      priceL: 46,
   },
   {
      id: 39,
      name: 'Włoski Gulasz Reposo',
      desc: 'wołowina, czerwone wino, szałwia, rozmaryn, czosnek, cebula, 2 grzanki czosnkowe',
      category: 'dania',
      image: p39_img,
      priceM: 33,
      priceL: 42,
   },
   {
      id: 40,
      name: 'Z Tuńczykiem i Jajkiem',
      desc: 'tuńczyk, jajko, kompozycja świeżych sałat,pomidorki koktajlowe, cebula czerwona, ogórek, pestki dyni i słonecznika, sos vinaigrette',
      category: 'salatki',
      image: p40_img,
      priceM: 30,
      priceL: 40,
   },
   {
      id: 41,
      name: 'Creme Brulee',
      desc: 'francuski deser jajeczno-śmietankowy z karmelizowanym cukrem trzcinowym',
      category: 'desery',
      image: p41_img,
      priceM: 21,
      priceL: 31,
   },
   {
      id: 42,
      name: 'Puchar Lodowy',
      desc: 'włoskie lody z owocami sezonowymi, bitą śmietaną i polewą czekoladową (tylko na miejscu/wynos)',
      category: 'desery',
      image: p42_img,
      priceM: 20,
      priceL: 30,
   },
   {
      id: 43,
      name: 'Gnocchi',
      desc: 'dodatkowe gnocchi do dań',
      category: 'dodatki',
      image: p43_img,
      priceM: 12,
      priceL: 18,
   },
   {
      id: 44,
      name: 'Kompozycja Sałat',
      desc: 'z warzywami, w sosie vinaigrette',
      category: 'dodatki',
      image: p44_img,
      priceM: 13,
      priceL: 20,
   },
   {
      id: 45,
      name: 'Oliwki',
      desc: 'prosto z włoch, do wyboru czarne, zielone lub mieszane',
      category: 'przystawki',
      image: p45_img,
      priceM: 7,
      priceL: 13,
   },
];

export default all_product;
