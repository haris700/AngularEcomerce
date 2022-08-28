import { Injectable } from '@angular/core';
import { Product } from './pages/home/home.component';

import {
  Firestore,
  collectionData,
  collection,
  addDoc,
  updateDoc,
  setDoc,
  doc,
  getDocs,
  collectionSnapshots,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class CrudserviceService {
  carts: Cart[] = [];
  orders: Order[] = [];
  products: any[] = [
    {
      id: '1',
      image: '../../../assets/falooda.jpg',
      title: 'Falooda',
      price: 120,
    },
    {
      id: '2',
      image: '../../../assets/chickenclub.jpg',
      title: 'Chickenclub',
      price: 100,
    },
    {
      id: '3',
      image: '../../../assets/bluemojito.jpg',
      title: 'Blue Mojito',
      price: 70,
    },
    {
      id: '4',
      image: '../../../assets/Angularimagesburger.jpg',
      title: 'Chicken Burger',
      price: 85,
    },
    {
      id: '5',
      image: '../../../assets/falooda.jpg',
      title: 'Falooda',
      price: 120,
    },
    {
      id: '6',
      image: '../../../assets/falooda.jpg',
      title: 'Falooda',
      price: 120,
    },
    {
      id: '7',
      image: '../../../assets/falooda.jpg',
      title: 'Falooda',
      price: 120,
    },
  ];

  addProducts(item: any) {
    const productsCollection = collection(this.store, 'products');
    addDoc(productsCollection, item);
  }

  getProducts() {
    const productsCollection = collection(this.store, 'products');

    return getDocs(productsCollection);
  }

  addCart(item: Cart) {
    const productsCollection = collection(this.store, 'products');
    getDocs(productsCollection);
    const cartCollection = collection(this.store, 'cart');
    addDoc(cartCollection, item);
  }

  getCarts() {
    const cartCollection = collection(this.store, 'cart');
    return getDocs(cartCollection);
  }

  updateCart(cartItem: any) {
    console.log(cartItem);

    const cartDoc = doc(this.store, `cart/${cartItem.docId}`);
    return updateDoc(cartDoc, { quantity: cartItem.quantity });
  }

  constructor(public store: Firestore) {
    // this.products.map((item) => this.addProducts(item));
  }
}

export interface Cart {
  id: string;
  image: string;
  title: string;
  description?: string | null;
  price: number;
  quantity: number;
}

export interface Order {
  image: string;
  title: string;
  description?: string | null;
  price: number;
  quantity: number;
}
