import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Country } from './../../model/country.model';
import { switchMap } from 'rxjs';
import { map } from 'rxjs/operators';
import { CountryService } from './../../services/country.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './detail.component.html',
  styles: [],
  providers: [CountryService]
})
export class DetailComponent implements OnInit {

  private route:ActivatedRoute = inject(ActivatedRoute);
  private router:Router = inject(Router);
  private countryService: CountryService = inject(CountryService);

  country:WritableSignal<Country> = signal({} as Country);

  ngOnInit(): void {
    this.route.paramMap.pipe(
      map(params => params.get('name')!),
      switchMap(name => this.countryService.getOne(name))
    )
    .subscribe(data => {
      this.country.set(data);
    });

  }

  goToBack(){
    this.router.navigate(['./countries']);
  }

}









