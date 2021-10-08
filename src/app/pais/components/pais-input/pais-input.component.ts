import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})

export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() placeholder: string = 'Buscar...'

  debounce: Subject<string> = new Subject();
  termino: string = '';

  buscar() {
    this.onEnter.emit(this.termino)

  }


  constructor() {
  }

  ngOnInit(): void {
     this.onDebounce
       .pipe(
         debounceTime(5000))
       .subscribe(
         valor => {
           this.onDebounce.emit(valor);
           console.log(valor);
         }
       )
  }

  teclaSearchCountry(event: any) {
    this.onDebounce.next(this.termino);


  }
}
