import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function Imagest() {
  return (
    <ImageList sx={{ width:800, height: 600 }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}><a href={item.link}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          /></a>
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    link: '/'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    link: '/'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    link: '/'
  },
  {
    img: './antic.jpeg',
    title: 'Antichrist',
    link: '/lbid/2/rbid/1/chid/1'
  },
  {
    img: './nietzsche.jpeg',
    title: 'Nietzsche',
    link: '/'
  },
  {
    img: './zara.jpeg',
    title: 'Zarathustra',
    link: '/lbid/3/rbid/8/chid/3'
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    link: '/'
  },
  {
    img: './ecce.jpg',
    title: 'Ecce homo',
    link: '/lbid/11/rbid/12/chid/2'
  },
  {
    img: './4.jpg',
    title: 'Beyond good and evil',
    link: '/lbid/7/rbid/9/chid/3'
  }
];