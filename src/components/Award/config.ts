// import imgAmfok from 'assets/images/amfok.png.png';
// import imgAward from 'assets/images/award.png';
import imgCoatOfArms from 'assets/images/coat-of-arms.png';

export interface AwardProps {
  id: string;
  text: string;
  imgSrc: string;
  alt: string;
}

export const awardsData:AwardProps [] = [
  {
    id: '1',
    imgSrc: imgCoatOfArms,
    alt: 'amfok-img',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor',
  },
  {
    id: '2',
    imgSrc: imgCoatOfArms,
    alt: 'coat-of-arms-img',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor',
  },
  {
    id: '3',
    imgSrc: imgCoatOfArms,
    alt: 'award-img',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor',
  },
];
