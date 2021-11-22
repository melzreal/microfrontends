import { ProductsController } from "./modules/products/products.controller"

export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  fullDescription: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Noice Tile',
    price: 10,
    description: 'A crisp tile',
    image: 'http://localhost:8080/alice-butenko.jpeg',
    fullDescription:
      'A tile like the spring to brighten up your kitchen or bathroom and make you feel special. ',
  },
  {
    id: 2,
    name: 'Sea tile',
    price: 15,
    description: 'A beautiful sea pattern to ease your soul.',
    image: 'http://localhost:8080/annie-spratt-BAj9EOZiDaE-unsplash.jpeg',
    fullDescription:
      'A beautiful Tile with sea colours for all your kichen needs',
  },
  {
    id: 3,
    name: 'Golden sun',
    price: 40,
    description: 'A tile to brighten up the house.',
    image: 'http://localhost:8080/patrick-hendry-hezNrE5QEa8-unsplash.jpeg',
    fullDescription:
      'To the right of the star is the first and last star, and the last to the right of the golden star',
  },
  {
    id: 4,
    name: 'Colour gallore',
    price: 20,
    description: 'An accent tile',
    image: 'http://localhost:8080/mitchell-luo-q9ZiOzsMAhE-unsplash.jpeg',
    fullDescription:
      'This pattern is to be used for light-colored squares and for bright stripes. Each side of both ends of the square gives a different shade of green or blue.',
  },
  {
    id: 5,
    name: 'Easy tile',
    price: 10,
    description: 'An easy tile for all needs',
    image: 'http://localhost:8080/angele-kampunsplash.jpeg',
    fullDescription: 'A tile for a new fresh look all needs of the house when it suits you can do that, but be careful of the little details that make up a tile design.',
  },
  {
    id: 6,
    name: 'Classy tile',
    price: 40,
    description: 'A fresh looking tile',
    image: 'http://localhost:8080/anna-auza-OOc5Vo--SFM-unsplash.jpeg',
    fullDescription: 'A classic white and blue moorish and mourish.',
  },
  {
    id: 7,
    name: 'Bath tile',
    price: 40,
    description: 'A classic floor bathroom tile',
    image: 'http://localhost:8080/peyman-farmani-splash.jpeg',
    fullDescription: 'A pebble style tile for a stylish bathroom.',
  },
  {
    id: 8,
    name: 'Outdoor tile',
    price: 60,
    description: 'An outdoor tile',
    image: 'http://localhost:8080/natalia-y-outtile-unsplash.jpeg',
    fullDescription: 'Typical outdoor tile, resistant to the times.',
  },
];

export default products;