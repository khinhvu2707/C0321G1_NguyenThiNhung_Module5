import {Injectable} from '@angular/core';
import {Word} from '../word';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionarys: Word[] = [
    {
      id: 1,
      word: 'Dictionary',
      mean: 'Từ điển'
    },
    {
      id: 2,
      word: 'Bye',
      mean: 'Tạm biệt'
    },
    {
      id: 3,
      word: 'Rose',
      mean: 'Hoa hồng'
    },
    {
      id: 4,
      word: 'Cat',
      mean: 'Con mèo'
    },
    {
      id: 5,
      word: 'Hello',
      mean: 'Xin chào'
    }
  ];

  constructor() {
  }

  getAll() {
    return this.dictionarys;
  }

  findById(wordId: number) {
    return this.dictionarys.find(item => item.id === wordId);
  }
}
