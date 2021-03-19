import * as ReactRouter from '@utilize/react-router';
import * as ReactRouterDOM from '@utilize/react-router-dom';

describe('react-router-dom', () => {
  for (let key in ReactRouter) {
    it(`re-exports ${key} from react-router`, () => {
      expect(ReactRouterDOM[key]).toBe(ReactRouter[key]);
    });
  }
});
