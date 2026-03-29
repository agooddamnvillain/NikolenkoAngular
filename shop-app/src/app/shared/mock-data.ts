import { Product, Category, Status } from './models/product';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    title: 'MacBook Pro 16"',
    description: 'High performance laptop from Apple',
    imageUrl: 'https://via.placeholder.com/150',
    price: 2500,
    releaseDate: '2022-10-01',
    category: Category.Laptop,
    status: Status.Available,
    tags: ['Apple', 'Laptop', 'Pro'],
    colors: ['Silver', 'Space Gray'],
    specs: { ram: 16, storage: 1024, color: 'Silver' },
    isDiscount: true,
    quantity: 5
  },
  {
    id: 2,
    title: 'iPhone 14',
    description: 'Latest Apple smartphone',
    imageUrl: 'https://via.placeholder.com/150',
    price: 999,
    releaseDate: '2023-01-15',
    category: Category.Phone,
    status: Status.PreOrder,
    tags: ['Apple', 'Phone', 'iOS'],
    colors: ['Black', 'White', 'Red'],
    specs: { ram: 6, storage: 512, color: 'Black' },
    isDiscount: false,
    quantity: 10
  },
  {
    id: 3,
    title: 'Samsung Galaxy Tab S8',
    description: 'High-end Android tablet',
    imageUrl: 'https://via.placeholder.com/150',
    price: 850,
    releaseDate: '2023-03-10',
    category: Category.Tablet,
    status: Status.OutOfStock,
    tags: ['Samsung', 'Tablet', 'Android'],
    colors: ['Gray', 'Silver'],

    // 🔥 Safe Navigation — просто прибираємо поле
    // specs: undefined,

    isDiscount: true,
    quantity: 0
  },
  {
    id: 4,
    title: 'Dell XPS 13',
    description: 'Compact and powerful ultrabook',
    imageUrl: 'https://via.placeholder.com/150',
    price: 1400,
    releaseDate: '2023-06-20',
    category: Category.Laptop,
    status: Status.Available,
    tags: ['Dell', 'Laptop'],
    colors: ['Black'],
    specs: { ram: 16, storage: 512, color: 'Black' },
    isDiscount: false,
    quantity: 3
  },
  {
    id: 5,
    title: 'Samsung Galaxy S23',
    description: 'Flagship Android smartphone',
    imageUrl: 'https://via.placeholder.com/150',
    price: 1100,
    releaseDate: '2024-02-01',
    category: Category.Phone,
    status: Status.Available,
    tags: ['Samsung', 'Phone'],
    colors: ['Black', 'Green'],
    specs: { ram: 8, storage: 256, color: 'Green' },
    isDiscount: true,
    quantity: 7
  }
];