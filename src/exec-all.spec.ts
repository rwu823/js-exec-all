import execAll from '.'

describe('Test execAll Spec', () => {
  it('test matched `abaca`', () => {
    expect(execAll(/a.a/, 'abaca')).toEqual([
      {
        match: 'aba',
        index: 0,
      },
      {
        match: 'aca',
        index: 2,
      },
    ])
  })

  it('test matched `abaca` with ignore-case', () => {
    expect(execAll(/a.a/i, 'AbacA')).toEqual([
      {
        match: 'Aba',
        index: 0,
      },
      {
        match: 'acA',
        index: 2,
      },
    ])
  })

  it('test `aaa` spec', () => {
    expect(execAll(/a/, 'aaa')).toEqual([
      {
        match: 'a',
        index: 0,
      },
      {
        match: 'a',
        index: 1,
      },
      {
        match: 'a',
        index: 2,
      },
    ])
  })

  it('test `aaa`  with ignore-case', () => {
    expect(execAll(/a/i, 'aAa')).toEqual([
      {
        match: 'a',
        index: 0,
      },
      {
        match: 'A',
        index: 1,
      },
      {
        match: 'a',
        index: 2,
      },
    ])
  })
})
