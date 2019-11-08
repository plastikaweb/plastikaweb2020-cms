import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TechnologiesGQL } from 'src/generated/types.graphql-gen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  technologies$: Observable<string[]>;

  constructor(service: TechnologiesGQL) {
    this.technologies$ = service
      .fetch({})
      .pipe(map(result => result.data.getTechnologies.map(tech => tech.name)));
  }
}
