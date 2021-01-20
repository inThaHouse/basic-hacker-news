import { fetchResource } from '../../utils/hackerNewsApi'

test('id 8863 of api call should return with the following properties', async () => {
  const goodData = await fetchResource(8863)
  const badData = await fetchResource('sfkdsjfdsklsfjdsklfj32432432')
  const requiredProperties = ['id', 'title', 'kids']

  expect(badData).toBe(null)

  // I know I mentioned I discouraged the use of forEach
  // but I'll have to take that statement back as it works very well when testing 🤣
  requiredProperties.forEach((property) =>
    expect(goodData).toHaveProperty(property)
  )
})
