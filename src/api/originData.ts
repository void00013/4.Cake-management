export const getOriginData = async () => {
  let url = 'https://h5.mcake.com/api/0434b49d1ac28f9d?cityId=110&page=1&bid=1'
  try {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'access-token': '41fe9bb60bbfe04db70daf0d7a13e19b',
        'version': 'v1.0'
      }
    }).then(res => res.json())
    return res
  } catch (error) {
    console.log('api-originData内出错', error)
  }
}
