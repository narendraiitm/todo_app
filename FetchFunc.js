import store from './vuex/index.js'
async function FetchFunction({ url, init_obj, authRequired }) {
  /**
   * @params {string} url: url to send request to
   * @params {object} init_object: Meta data about request
   *
   */
  if (url === undefined) {
    throw Error('Url required')
  }

  if (init_obj === undefined) {
    init_obj = {}
  }

  if (authRequired === undefined) {
    authRequired = false
  }

  if (authRequired === true) {
    if (init_obj.headers === undefined) {
      init_obj.headers = {
        'Authentication-token': store.getters.token,
      }
    } else {
      init_obj.headers['Authentication-token'] = store.getters.token
    }
  }

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
