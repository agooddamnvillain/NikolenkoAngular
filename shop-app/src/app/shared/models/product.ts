export enum Category {
    Laptop = 'Laptop',
    Phone = 'Phone',
    Tablet = 'Tablet'
  }
  
  export enum Status {
    Available = 'Available',
    OutOfStock = 'OutOfStock'
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
    specs: Specifications; // вкладений об'єкт
  }