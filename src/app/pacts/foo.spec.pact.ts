import { createHttpFactory } from '@ngneat/spectator/jest';
import { MatchersV3 } from '@pact-foundation/pact';
import { pactWith } from 'jest-pact/dist/v3';
import { FooHttpControllerService, Response } from '../services/backend';

describe('Pacts', () => {
  const createHttp = createHttpFactory(FooHttpControllerService);

  const response: Response = { foo: 'bar' };

  pactWith({ consumer: 'frontend', provider: 'backend' /*, logLevel: 'debug'*/ }, interaction => {
    interaction('test-foo', ({ provider, execute }) => {
      beforeEach(() => {
        return provider
          .uponReceiving('a get request')
          .withRequest({
            method: 'GET',
            path: '/foo',
          })
          .willRespondWith({
            status: 200,
            body: MatchersV3.like(response),
          });
      });

      execute('foo', ({ url }) => {
        const spectator = createHttp();
        spectator.service.configuration.basePath = url;
        return spectator.service
          .foo()
          .toPromise()
          .then(res => {
            console.log(res);
            expect(res).toEqual(response);
          });

        // return spectator.httpClient
        //   .request<Response>('get', `${url}/foo`)
        //   .toPromise()
        //   .then(res => {
        //     console.log(res);
        //     expect(res).toEqual(response);
        //   });
      });
    });
  });
});
