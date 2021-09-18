import detailReducer from '../../reducers/detailReducer';

/**
 * @jest-environment jsdom
 */

describe('Detail Reducer', () => {
  it('Checks if default state is returned', () => {
    const state = detailReducer(undefined, { type: '' });
    expect(state).toEqual({ meal: { meals: [{}] } });
  });

  it("Checks if reducer's default action returns provided state", () => {
    const state = detailReducer({ meal: { meals: [{}] } }, { type: '' });
    expect(state).toEqual({ meal: { meals: [{}] } });
  });
});
