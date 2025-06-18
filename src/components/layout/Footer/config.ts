import React from 'react';
import IconFacebook from 'assets/icons/icon-facebook.svg?react';
import IconIn from 'assets/icons/icon-in.svg?react';
import IconInsta from 'assets/icons/icon-instagram.svg?react';
import IconTelegram from 'assets/icons/icon-telegram.svg?react';

export interface FooterTitle {
  title: string;
  link: string;
  id: string;
}

export interface FooterNavigation {
  text: string;
  link: string;
  id: string;
}

export const individuals: FooterTitle[] = [
  { title: 'Карта Lite', link: '/', id: '1' },
  { title: 'Карта Gold', link: '/', id: '2' },
  { title: 'Рефинансирование кредитов', link: '/', id: '3' },
];

export const business: FooterTitle[] = [
  { title: 'Для малого бизнеса', link: '/', id: '4' },
  { title: 'Для самозанятых', link: '/', id: '5' },
  { title: 'Кредит для ТОО', link: '/', id: '6' },
  { title: 'Факторинг', link: '/', id: '7' },
];

export const navigation: FooterNavigation[] = [
  { text: 'О нас', link: '/', id: '1' },
  { text: 'Документы', link: '/', id: '2' },
  { text: 'Частным лицам', link: '/', id: '3' },
  { text: 'Бизнесу', link: '/', id: '4' },
  { text: 'Помощь', link: '/', id: '5' },
  { text: 'Наш вклад в общество', link: '/', id: '6' },
  { text: 'Женское дело', link: '/', id: '7' },
  { text: 'Инвесторам', link: '/', id: '8' },
  { text: 'Карта сайта', link: '/', id: '9' },
  { text: 'Новости', link: '/', id: '10' },
  { text: 'Контакты', link: '/', id: '11' },
  { text: 'Финансовая грамотность', link: '/', id: '12' },
];

export interface ContactsLinks {
  link: string;
  icon?: React.FC;
  id: string;
  className?: string;
}

export const contacts:ContactsLinks [] = [
  {
    link: '/', icon: IconInsta, id: '1', className: 'social-network',
  },
  {
    link: '/', icon: IconFacebook, id: '2', className: 'social-network',
  },
  {
    link: '/', icon: IconIn, id: '3', className: 'social-network',
  },
  {
    link: '/', icon: IconTelegram, id: '4', className: 'social-network',
  },
];
