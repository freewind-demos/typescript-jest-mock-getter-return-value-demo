import {Hello} from './hello';

describe('test', () => {

  it('mocks methods', () => {
    const hello = new Hello('init');
    jest.spyOn(hello, 'getName').mockReturnValue('mocked-value');
    expect(hello.getName()).toBe('mocked-value')
  })

  it('mocks getter', () => {
    const hello = new Hello('init');
    jest.spyOn(hello, 'name', 'get').mockReturnValue('mocked-getter-value')
    expect(hello.name).toBe('mocked-getter-value')
  })

})
