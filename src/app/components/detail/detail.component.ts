import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Country } from './../../model/country.model';
import { CountryService } from './../../services/country.service';
import { CodeService } from './../../services/code.service';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detail.component.html',
  styles: [],
  providers: [CountryService]
})
export class DetailComponent implements OnInit {

  private route:ActivatedRoute = inject(ActivatedRoute);
  private router:Router = inject(Router);
  private codeService: CodeService = inject(CodeService);

  country:Country | undefined;

  ngOnInit(): void {
    //Data proveniente del resolver
    this.route.data.subscribe(data => {
      this.country = data['country'];
    })

  }

  goToBack(){
    this.router.navigate(['./countries']);
  }

  getNameCountry(key:string){
    return this.codeService.getValue(key);
  }

}









