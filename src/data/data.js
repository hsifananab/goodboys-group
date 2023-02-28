import Botsad_1 from '../assets/images/slider/botsad_1.jpg';
import Botsad_2 from '../assets/images/slider/botsad_2.jpg';
import Botsad_3 from '../assets/images/slider/botsad_3.jpg';

import Kld_1 from '../assets/images/slider/kld_1.jpg';
import Kld_2 from '../assets/images/slider/kld_2.jpg';
import Kld_3 from '../assets/images/slider/kld_3.jpg';

import Mramor_1 from '../assets/images/slider/mramor_1.jpg';
import Mramor_2 from '../assets/images/slider/mramor_2.jpg';
import Mramor_3 from '../assets/images/slider/mramor_3.jpg';

import Talents_1 from '../assets/images/slider/talents_1.jpg';
import Talents_2 from '../assets/images/slider/talents_2.jpg';
import Talents_3 from '../assets/images/slider/talents_3.jpg';

export const navs = [
  { title: 'О нас', path: 'about' },
  { title: 'кейсы', path: 'cases' },
  { title: 'форма обратной связи', path: 'feedback' },
  { title: 'контакты', path: 'contacts' },
];

export const thumbs = [
  { name: 'botsad', image: Botsad_1 },
  { name: 'kld', image: Kld_1 },
  { name: 'mramor', image: Mramor_1 },
  { name: 'talents', image: Talents_1 },
];

export const slides = [
  { title: 'botsad', image: Botsad_2 },
  { title: 'kld', image: Kld_2 },
  { title: 'mramor', image: Mramor_2 },
  { title: 'talents', image: Talents_2 },
];

export const cases = [
  {
    title: 'SUMMER MUSIC PARK',
    text: 'Фестиваль популярной музыки «SUMMER MUSIC PARK» при поддержке Президентского фонда культурных инициатив.\nКоманда GBG провела проект в роли генерального технического подрядчика. Мы застроили площадку, предоставили в аренду светотехническое, звуковое и видеооборудование, обеспечили тех-райдер, трансляцию фестиваля и поддержку оснащения на протяжении всего события.',
    images: [Botsad_1, Botsad_2, Botsad_3],
  },
  {
    title: 'Конференция Huawei',
    text: 'Good Boys Group стали подрядчиком по проведению онлайн трансляции мероприятия и организации международного «конференц-колла» для спикеров и участников конференции.\nМы предоставили в аренду всё необходимое оборудование. Наши сотрудники осуществили профессиональную техническую поддержку мероприятия.',
    images: [Kld_1, Kld_2, Kld_3],
  },
  {
    title: 'Шедевры в Мраморном',
    text: 'Цикл камерных концертов классической музыки в стенах Белого зала Мраморного дворца.\nНаша команда предоставила в аренду световое оборудование, LED панели с декоративным оформлением и осуществила техническую поддержку мероприятия.\nОрганизатором мероприятия выступило концертное агентство «Парк музыки» при поддержке Президентского фонда культурных инициатив.',
    images: [Mramor_1, Mramor_2, Mramor_3],
  },
  {
    title: 'Далеко за словесными горами в стране согласных',
    text: 'Далеко за словесными горами в стране согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Эта парадигматическая страна, в которой жаренные члены предложения залетают прямо в рот.',
    images: [Talents_1, Talents_2, Talents_3],
  },
];
