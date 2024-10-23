import {Component, EventEmitter, Input, input, Output} from '@angular/core';
import {Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  public onDeleted: EventEmitter<string> = new EventEmitter();

  @Input()
  public CharacterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }];


  public onDeleteCharacter(id: string): void {
    console.log(id);
    this.onDeleted.emit(id);
  }

}
