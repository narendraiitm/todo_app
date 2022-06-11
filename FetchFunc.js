// console.log('hello')
async function FetchFunction(url, init_obj) {
  const response = await fetch(url, init_obj).catch(() => {
    throw Error('Network Error')
  })
  if (response) {
    if (response.ok) {
      const data = await response.json().catch(() => {
        throw Error('Unexpected Response')
      })
      if (data) {
        return data
      }
    } else {
      throw Error(response.statusText)
    }
  }
}

export default FetchFunction
