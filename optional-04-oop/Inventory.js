/**
 * TODO
 * Selesaikan kode pembuatan class Inventory dengan ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungs `item.displayDetails()`).
 */

import Item from './Item.js';

class Inventory extends Item {
  constructor(items, id, name, quantity, price) {
    super(id, name, quantity, price);
    this.items = [];
  }

  addItem(itemToAdd) {
    this.items.push(itemToAdd);
  }

  removeItem(itemToRemove) {
    const filteredItems = this.items.filter((item) => item.id !== itemToRemove);
    this.items = filteredItems;
  }

  listItems() {
    const details = this.items.map((item) => item.displayDetails());
    return details.join('\n')
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;
