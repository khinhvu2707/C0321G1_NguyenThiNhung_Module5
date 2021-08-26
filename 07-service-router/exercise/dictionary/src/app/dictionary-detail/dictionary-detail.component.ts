import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DictionaryService} from '../service/dictionary.service';
import {Word} from '../word';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit {
findWord: Word;
  constructor(private route: ActivatedRoute, private dictionaryService: DictionaryService) { }

  ngOnInit(): void {
   const wordId = Number(this.route.snapshot.paramMap.get('id'));
   this.findWord = this.dictionaryService.findById(wordId);
  }

}
