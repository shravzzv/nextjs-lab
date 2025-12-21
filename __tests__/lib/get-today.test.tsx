import getToday from '@/lib/get-today'

describe('getToday', () => {
  it('should return the current day', () => {
    const today = getToday()
    expect(today).toBe(new Date().getDay())
  })
})
