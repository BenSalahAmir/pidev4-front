export class Product {
    idProduct: number;
    nameProduct: string;
    priceProduct: number;
    qttordered: number;
    idCart:number;

    // Add more properties as needed
  
    constructor(idProduct: number, nameProduct: string, priceProduct: number,qttordered: number,idCart:number) {
      this.idProduct = idProduct;
      this.nameProduct = nameProduct;
      this.priceProduct = priceProduct;
      this.qttordered = qttordered;
      this.idCart=idCart;
    }
  }