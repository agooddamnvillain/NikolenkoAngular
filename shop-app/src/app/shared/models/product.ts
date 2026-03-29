export enum Category {
    Laptop = 'Laptop',
    Phone = 'Phone',
    Tablet = 'Tablet'
  }
  
  export enum Status {
    Available = 'Available',
    OutOfStock = 'OutOfStock',
    PreOrder = 'PreOrder'
  }
  
  export interface Specifications {
    ram: number;
    storage: number;
    color: string;
  }
  
  export interface Product {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
  
    // 🔥 ВАЖЛИВО: string, НЕ Date
    releaseDate: string;
  
    category: Category;
    status: Status;
    tags: string[];
    colors: string[];
  
    // 🔹 Safe Navigation
    specs?: Specifications;
  
    // 🔹 @if
    isDiscount?: boolean;
  
    // 🔹 кнопка
    quantity: number;
  }