import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DOCUMENT } from '@angular/common'; 

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
  
  @ViewChild('exampleModal') searchModal; 
  ventes = [];
  commandes = [];
  produits = []

  constructor(private modalService: NgbModal, @Inject(DOCUMENT) document, private elRef: ElementRef) {
    // this.searchModal = document.querySelector("#exampleModal");
   }

  ngOnInit(): void {
  }

  open(content) {
    this.modalService.open(content).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

  dismissAll() {
    this.modalService.dismissAll();
  }

  OpenModal(id) {
    let ref = this.elRef.nativeElement.querySelector(`#${id}`);
    console.log(ref);
    
    this.modalService.open(ref.n, {windowClass: 'modal-search'}).result.then((result) => {
      
    }, (reason) => {
      
    });
  }

}
