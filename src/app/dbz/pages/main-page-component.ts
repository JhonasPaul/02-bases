import {Component} from '@angular/core';
import {Character} from '../interfaces/character.interface';
import {DbzService} from '../servicios/dbz.service';

@Component({
  selector: 'app-dbz-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  public onDeleteCharacter(id: string): void {
    console.log(id);
    this.dbzService.deleteCharacterById(id);

  }

  onNewCharacter(character: Character): void {
    console.log(character);
    this.dbzService.addCharacter(character);
  }

}
