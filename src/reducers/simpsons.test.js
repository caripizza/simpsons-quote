import reducer from './simpsons';
import { FETCH_QUOTE } from '../actions/simpsons';

describe('simpsons reducer', () => {
  it('handles the fetch quote action', () => {
    const state = {
      quote: '',
      characterName: '',
      characterImage: ''
    };
    const fetchedState = reducer(state, {
      type: FETCH_QUOTE,
      payload: {
        quote: 'this is a quote',
        character: 'Myself',
        image: 'http://image.com'
      }
    });
    expect(fetchedState).toEqual({
      quote: 'this is a quote',
      characterName: 'Myself',
      characterImage: 'http://image.com'
    });
  });
});
