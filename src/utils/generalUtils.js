export const reduceList = (ids, limit = 20) => {
  return ids.length > limit ? ids.slice(0, limit) : ids
}

export const formatIdsToDataList = async (ids, toPromise) => {
  console.log(toPromise)
  const promises = ids.map(toPromise)
  const dataList = await Promise.all(promises)

  return dataList
}
