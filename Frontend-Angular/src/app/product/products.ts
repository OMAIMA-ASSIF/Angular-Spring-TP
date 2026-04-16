import {Component, OnInit} from '@angular/core';
import {CommonModule, NgIf} from '@angular/common';
import {ProductService} from '../services/product';

@Component({
  selector: 'app-product',
  imports: [
    CommonModule
  ],
  templateUrl: './products.html',
  styleUrl: './products.css',
  standalone: true

})
export class Products implements OnInit{
  //products! : Array<any>; ou products : Array<any> = [] ou products : any
  products : any;
  //on doit injecter le service dans le composant
  constructor(private productService : ProductService) {
  }
  //la methode qui s'executent au demarrage du composant
  //on initialise l'objet products ici sinon on va avoir 'undefined'
  ngOnInit(): void {
    //c'est ici qu'on envoie une requete vers le backend et on recupere les donnees
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next : resp => {
        this.products= resp;
      },
      error : err => {
        console.log(err);
      }
    });
  }
  handleDelete(product: any){
    let v  = confirm('etes vous sur de vouloir supprimer ?');
    if(v==true){
      this.productService.deleteProduct(product).subscribe({
        next : value => {
          this.getAllProducts();
        },
        error : err => {
          console.log(err)
        }
      })
    }
  }

}
