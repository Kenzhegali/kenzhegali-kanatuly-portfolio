import React from 'react';
import IconBlog from 'assets/icons/icon-blog.svg?react';
import IconContacts from 'assets/icons/icon-contacts.svg?react';
import IconHelp from 'assets/icons/icon-help.svg?react';
import IconNews from 'assets/icons/icon-news.svg?react';
import IconSociety from 'assets/icons/icon-society.svg?react';

export interface PaginationProps {
  text: string;
  link: string;
  icon?: React.FC;
  iconClass: string;
  id: string;
  className?: string;
}

export const paginationItems:PaginationProps [] = [
  {
    id: '1',
    link: '/',
    icon: IconHelp,
    text: 'Помощь',
    iconClass: 'pagination-link-svg',
  },
  {
    id: '2',
    link: '/',
    icon: IconSociety,
    text: 'Наш вклад в общество',
    iconClass: 'pagination-link-svg',
    className: 'society',
  },
  {
    id: '3',
    link: '/',
    icon: IconNews,
    text: 'Новости',
    iconClass: 'pagination-link-svg',
  },
  {
    id: '4',
    link: '/',
    icon: IconBlog,
    text: 'Блог. Для дела',
    iconClass: 'pagination-link-svg',
    className: 'blog',
  },
  {
    id: '5',
    link: '/',
    icon: IconContacts,
    text: 'Контакты',
    iconClass: 'pagination-link-svg',
  },
];
