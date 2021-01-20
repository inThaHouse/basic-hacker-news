import { reduceList, formatIdsToDataList } from '../../utils/generalUtils'
import { fetchResource } from '../../utils/hackerNewsApi'

const shortList = [1, 2, 3]
const longList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
const listLimit = 10

test('outputs reduced length of list if necessary', () => {
  expect(reduceList(shortList)).toBe(shortList)
  expect(reduceList(longList, listLimit)).toStrictEqual(
    longList.slice(0, listLimit)
  )
  expect(reduceList(longList, 5)).toHaveLength(5)
})

test('outputs array of object with property id matching the ones in shortList variable.', async () => {
  const result = await formatIdsToDataList(shortList, fetchResource)

  shortList.forEach((id) => {
    expect(result).toEqual(
      expect.arrayContaining([expect.objectContaining({ id })])
    )
  })
})
