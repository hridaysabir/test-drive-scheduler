import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function srcset(image, width, height, rows, cols) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList({selectedVehicle, setVehicle}) {
  return (
    <ImageList
      sx={{
        width: 500,
        height: 450,
      }}
      rowHeight={200}
      gap={1}
    >
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;
        const iconColor = item.title === selectedVehicle ? 'red' : 'white';

        return (
          <ImageListItem key={item.img} cols={cols} rows={rows}>
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              sx={{
                background:
                  'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                  'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                onClick={() => {setVehicle(item.title)}}
                  sx={{ color: iconColor }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://media.ed.edmunds-media.com/maserati/quattroporte/2017/oem/2017_maserati_quattroporte_sedan_gts-granlusso_fq_oem_1_1600.jpg',
    title: '2017 Maserati Coupe',
  },
  {
    img: 'https://pictures.topspeed.com/IMG/crop_webp/201509/2016-lamborghini-aventado-19_800x0.webp',
    title: '2016 Lamborghini Murcielago',
  },
  {
    img: 'https://www.stockvault.net/data/2010/03/12/113289/preview16.jpg',
    title: '2014 Mercedes SLK',
  },
  {
    img: 'https://www.stockvault.net/data/2010/05/21/113854/thumb16.jpg',
    title: '1966 Pontiac GTO',
  },
  {
    img: 'https://www.stockvault.net/data/2010/05/21/113852/thumb16.jpg',
    title: '1965 Chevrolet Silverado',
  },
  {
    img: 'https://media.ed.edmunds-media.com/mercedes-benz/amg-gt/2020/oem/2020_mercedes-benz_amg-gt_sedan_53_fq_oem_1_1280.jpg',
    title: '2022 Mercedes AMG GT',
  },
  {
    img: 'https://www.la.mercedes-benz.com/en/passengercars/mercedes-benz-cars/models/g-class/suv-w463/amg/exterior-design/_jcr_content/par/doubleimagecombinati/par/doubleimageelement/asset.MQ6.12.20190926215937.jpeg',
    title: '2019 Mercedes AMG G 63',
  },
];
