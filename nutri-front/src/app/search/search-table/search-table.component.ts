import { Component, Input, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AlimentoDialogComponent } from 'src/app/alimento-dialog/alimento-dialog.component';

@Component({
  selector: 'app-search-table',
  templateUrl: './search-table.component.html',
  styleUrls: ['./search-table.component.css']
})

export class SearchTableComponent implements OnInit {
  @Input()
  alimentos: any[];
  index: number;
  
  cols = [
    {field: 'descricao', header: 'Alimento'}, {field: 'umidade', header: 'Umidade'},
    {field: 'kcal', header: 'KCAL'}, {field: 'kj', header: 'KJ'},
    {field: 'proteina', header: 'Proteína'}, {field: 'lipideos', header: 'Lipídeos'},
    {field: 'colesterol', header: 'Colesterol'}, {field: 'carboidrato', header: 'Carboidrato'},
    {field: 'fibraalimentar', header: 'Fibra alimentar'}, {field: 'cinzas', header: 'cinzas'},
    {field: 'calcio', header: 'Cálcio'}, {field: 'magnesio', header: 'Magnésio'},
    {field: 'manganes', header: 'Manganês'}, {field: 'fosforo', header: 'Fósforo'},
    {field: 'ferro', header: 'Ferro'}, {field: 'sodio', header: 'Sódio'},
    {field: 'potassio', header: 'Potássio'}, {field: 'cobre', header: 'Cobre'},
    {field: 'zinco', header: 'Zinco'}, {field: 'retinol', header: 'Vitamina A'},
    {field: 're', header: 'RE'}, {field: 'rae', header: 'RAE'},
    {field: 'tiamina', header: 'Vitamina B1'}, {field: 'riboflavina', header: 'Vitamina B2'},
    {field: 'piridoxina', header: 'Vitamina B6'}, {field: 'niacina', header: 'Vitamina B3'}, 
    {field: 'vitaminac', header: 'Vitamina C'}
  ];

  constructor(private modalService: NgbModal) { }
  
  ngOnInit(){ 
  }
  
  openAlimentoDialog(data){
    this.modalService.dismissAll();
    let modal = this.modalService.open(AlimentoDialogComponent, { size: 'xl' });
    if(data){
      modal.componentInstance.alimento = data;

    }
    
  }
}
