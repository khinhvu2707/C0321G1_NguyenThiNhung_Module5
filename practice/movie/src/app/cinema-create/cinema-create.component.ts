import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';
import {MovieService} from '../movie.service';
import {Movie} from '../movie';
import {CinemaService} from '../cinema.service';
import {Cinema} from '../cinema';

@Component({
  selector: 'app-cinema-create',
  templateUrl: './cinema-create.component.html',
  styleUrls: ['./cinema-create.component.css']
})
export class CinemaCreateComponent implements OnInit {

  public cinemaForm: FormGroup;
  public movies: Movie[] = [];
  public cinemas: Cinema[] = [];
  cinemaByCode: Cinema[] = [];
  message = '';

  constructor(public cinemaService: CinemaService, public movieService: MovieService,
              public router: Router, public toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.initfrom();
    this.getAllMovie();
    this.getAllCinema();
  }

  initfrom() {
    this.cinemaForm = new FormGroup({
      code: new FormControl('', [Validators.required, Validators.pattern('^CI-\\d{4}$')]),
      movie: new FormControl('', [Validators.required]),
      dateTime: new FormControl('', [Validators.required, this.checkDate]),
      ticket: new FormControl('', [Validators.required, Validators.min(0)]),
    });
  }

  checkDate(abstractControl:
              AbstractControl): any {
    const now = new Date();
    const date = new Date(abstractControl.value);
    return now <= date ? null : {errorCode: true};
  }

  create() {
    this.cinemaService.search(this.cinemaForm.value.code).subscribe(data0 => {
      this.cinemaByCode = data0;
      console.log(this.cinemaByCode);
      console.log(this.cinemaForm.value.code);
      console.log(this.cinemaByCode.length);
      // tslint:disable-next-line:no-conditional-assignment
      if (this.cinemaByCode.length === 0) {
        this.cinemaService.create(this.cinemaForm.value).subscribe(data => {
          this.router.navigateByUrl('/list');
          this.toastr.success('Thanks!', 'Create successfully !');
        });
      } else {
        this.message = 'already exist';
        console.log(this.message);
      }
    });
  }

  getAllCinema() {
    this.cinemaService.getAll().subscribe(data => {
      this.cinemas = data;
    });
  }

  getAllMovie() {
    this.movieService.getAllMovie().subscribe(data => {
      this.movies = data;
    });
  }

}
