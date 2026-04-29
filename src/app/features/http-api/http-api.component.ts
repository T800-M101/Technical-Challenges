import { Component, inject } from '@angular/core';
import { debounceTime, distinctUntilChanged, finalize, shareReplay, Subject, switchMap, tap } from 'rxjs';
import { CountryService } from '../../core/services/country.service';
import { AsyncPipe, DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-http-api',
  imports: [DecimalPipe, AsyncPipe],
  templateUrl: './http-api.component.html',
  styleUrl: './http-api.component.css'
})
export class HttpApiComponent {
  loading = false
  private countryService = inject(CountryService);

  // Subject to emit the search terms
  private searchTerm = new Subject<string>();

  // Main data stream
  countries$ = this.searchTerm.pipe(
  debounceTime(400),
  distinctUntilChanged(),
  tap(() => this.loading = true),
  switchMap(term =>
    this.countryService.searchCountries(term).pipe(
      // Important: switch off the loading
      finalize(() => this.loading = false)
    )
  ),
  tap(() => this.loading = false), // Doble check to switch off the loading
  shareReplay(1)
);

search(term: string) {
  if (term.length > 2) this.loading = true;
  this.searchTerm.next(term);
}



}
