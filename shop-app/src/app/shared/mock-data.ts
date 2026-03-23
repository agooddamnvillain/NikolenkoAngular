import { Product, Category, Status } from './models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'MacBook Pro 16"',
    description: 'High performance laptop from Apple',
    imageUrl: 'https://via.placeholder.com/150',
    price: 2500,
    releaseDate: new Date('2022-10-01'),
    category: Category.Laptop,
    status: Status.Available,
    tags: ['Apple', 'Laptop', 'Pro'],
    colors: ['Silver', 'Space Gray'],
    specs: { ram: 16, storage: 1024, color: 'Silver' }
  },
  {
    id: 2,
    title: 'iPhone 14',
    description: 'Latest Apple smartphone',
    imageUrl: 'https://via.placeholder.com/150',
    price: 999,
    releaseDate: new Date('2023-01-15'),
    category: Category.Phone,
    status: Status.Available,
    tags: ['Apple', 'Phone', 'iOS'],
    colors: ['Black', 'White', 'Red'],
    specs: { ram: 6, storage: 512, color: 'Black' }
  },
  {
    id: 3,
    title: 'Samsung Galaxy Tab S8',
    description: 'High-end Android tablet',
    imageUrl: 'https://via.placeholder.com/150',
    price: 850,
    releaseDate: new Date('2023-03-10'),
    category: Category.Tablet,
    status: Status.OutOfStock,
    tags: ['Samsung', 'Tablet', 'Android'],
    colors: ['Gray', 'Silver'],
    specs: { ram: 8, storage: 256, color: 'Gray' }
  },
  // додати ще 2–3 елементи
];