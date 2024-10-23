import {Injectable} from '@angular/core';
import {Character} from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uuid(),
    name: "krillin",
    power: 1000
  }, {
    id: uuid(),
    name: "Goku",
    power: 9500
  },
    {
      id: uuid(),
      name: "Vegera",
      power: 7500
    }
  ];

  public addCharacter(character: Character): void {

    /*en este caso, el spread copea toda las propiedad de Character en el nuevo obeto newCharacter*/
    const newCharacter: Character ={
      id: uuid(),
      ...character
    }
    console.log(newCharacter);
    this.characters.push(newCharacter);
  }

  /*public onDeleteCharacter(index: number): void {
    this.character.splice(index, 1);
  }*/

  deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
