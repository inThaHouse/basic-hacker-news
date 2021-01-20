import { BASE_URL } from './constants'
import { formatIdsToDataList, reduceList } from './generalUtils'

export const fetchResource = async (id) => {
  try {
    const resp = await fetch(`${BASE_URL}/item/${id}.json`)
    const item = await resp.json()

    return item
  } catch (error) {
    throw new Error(error)
  }
}

export const fetchStories = async (route, toFormattedList) => {
  try {
    const response = await fetch(`${BASE_URL}/${route}`)
    const listOfIds = await response.json()
    const reducedListOfIds = reduceList(listOfIds, 10)

    return formatIdsToDataList(reducedListOfIds, toFormattedList)
  } catch (error) {
    throw new Error(error)
  }
}
