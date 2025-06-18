import IconArrow from 'assets/icons/burger-arrow.svg?react';
import IconContacts from 'assets/icons/contact.svg?react';
import IconGender from 'assets/icons/gender.svg?react';
import IconHelp from 'assets/icons/help.svg?react';
import IconFacebook from 'assets/icons/icon-facebook.svg?react';
import IconIn from 'assets/icons/icon-in.svg?react';
import IconInsta from 'assets/icons/icon-instagram.svg?react';
import IconMap from 'assets/icons/icon-map.svg?react';
import IconTelegram from 'assets/icons/icon-telegram.svg?react';
import IconNews from 'assets/icons/news.svg?react';
import IconSociety from 'assets/icons/society.svg?react';

export interface BurgerList {
  title: string;
  link: string;
  icon?: React.FC | null;
  iconClass: string;
  id: string;
}

export const burgerMenu:BurgerList[] = [
  {
    title: 'Частным лицам', link: '/', icon: IconArrow, iconClass: 'burger-item-link-svg', id: '1',
  },
  {
    title: 'Бизнесу', link: '/', icon: IconArrow, iconClass: 'burger-item-link-svg', id: '2',
  },
  {
    title: 'Инвесторам', link: '/', icon: null, iconClass: 'burger-item-link-svg', id: '3',
  },
  {
    title: 'Блог. Для дела', link: '/', icon: IconArrow, iconClass: 'burger-item-link-svg', id: '4',
  },
];

export const burgerNav: BurgerList[] = [
  {
    title: 'Помощь', link: '/', icon: IconHelp, iconClass: 'nav-item-link-svg', id: '5',
  },
  {
    title: 'Новости', link: '/', icon: IconNews, iconClass: 'nav-item-link-svg', id: '6',
  },
  {
    title: 'Контакты', link: '/', icon: IconContacts, iconClass: 'nav-item-link-svg', id: '7',
  },
  {
    title: 'Наш вклад в общество', link: '/', icon: IconSociety, iconClass: 'nav-item-link-svg', id: '8',
  },
  {
    title: 'Женское дело', link: '/', icon: IconGender, iconClass: 'nav-item-link-svg', id: '9',
  },
  {
    title: 'Карта отделений', link: '/', icon: IconMap, iconClass: 'nav-item-link-svg', id: '10',
  },
];

export interface BurgerSocial {
  icon?: React.FC;
  id: string;
}

export const burgerSocial: BurgerSocial[] = [
  { icon: IconFacebook, id: '1' },
  { icon: IconInsta, id: '2' },
  { icon: IconIn, id: '3' },
  { icon: IconTelegram, id: '4' },
];
