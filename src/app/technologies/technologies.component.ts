import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TechnologiesGQL } from 'src/generated/types.graphql-gen';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TechnologiesComponent implements OnInit {
  technologies$: Observable<string[]>;

  constructor(private gqlService: TechnologiesGQL) {}

  ngOnInit() {
    this.technologies$ = this.gqlService
      .fetch({})
      .pipe(map(result => result.data.getTechnologies.map(tech => tech.name)));
  }
}
