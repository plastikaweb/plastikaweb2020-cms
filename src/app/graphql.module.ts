import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import * as dotenv from 'dotenv';

dotenv.config();

@NgModule({
  exports: [HttpClientModule, ApolloModule, HttpLinkModule],
})
export class GraphQLModule {
  constructor(apollo: Apollo, httpLink: HttpLink) {
    const uri = process.env.API_URI;
    const http = httpLink.create({ uri });

    apollo.create({
      link: http,
      cache: new InMemoryCache(),
    });
  }
}
