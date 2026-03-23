export enum Category {
    Laptop = 'Laptop',
    Phone = 'Phone',
    Tablet = 'Tablet'
  }
  
  export enum Status {
    Available = 'Available',
    OutOfStock = 'OutOfStock',
    PreOrder = 'PreOrder' // додали для @switch
  }
  
  export interface Specifications {
    ram: number;        // GB
    storage: number;    // GB
    color: string;
  }
  
  export interface Product {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: number;
    releaseDate: Date;
    category: Category;
    status: Status;
    tags: string[];
    colors: string[];
  
    // 🔹 Safe Navigation (може бути відсутній)
    specs?: Specifications;
  
    // 🔹 Для @if (акції)
    isDiscount?: boolean;
  
    // 🔹 Для логіки кнопок
    quantity: number;
  }