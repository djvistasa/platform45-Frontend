import 'whatwg-fetch';

export function request(url, options, token) {
  const fetchOptions = options || {};
  fetchOptions.headers = fetchOptions.headers || {};

  if (token) fetchOptions.headers.Authorization = token;

  const result = {};

  return Promise.race([
    new Promise((resolve) => setTimeout(resolve, 30000)),
    fetch(url, fetchOptions, { mode: 'CORS' }),
  ]) // check that we haven't timed out
    .then((rsp) => {
      if (rsp instanceof Response) return rsp;
      throw '(fetch) Request Timed Out'; // eslint-disable-line no-throw-literal
    })
    .then((rsp) => {
      result.status = rsp.status;
      return result.status === 204 ? {} : rsp.json();
    })
    .then((data) => {
      // we treat these statuses as successes
      if (result.status >= 200 && result.status < 300) {
        result.data = data;
      } else { // otherwise it's an error
        result.error = data;
      }
      return result;
    })
    .catch((error) => {
      // if we encounter an error (probs a timeout or an invalid json response)
      // log it and return an empty error object to still show we errored
      console.error(error); // eslint-disable-line
      result.error = {};
      return result;
    });
}

/**
 * Gets a resource given a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {string} [token]   The authentication token
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export function getResource(url, token, options) {
  const getOptions = options || {};

  // set request method
  getOptions.method = 'GET';

  // set content type header
  getOptions.headers = getOptions.headers || {};
  getOptions.headers['Content-type'] = 'application/json';
  return request(url, getOptions, token);
}

/**
 * Posts a resource to a url, returning a promise
 *
 * @param  {string} url       The URL we want to post to
 * @param  {object} resource  The resource we want to post
 * @param  {string} [token]   The authentication token
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export function postResource(url, resource, token, options) {
  const postOptions = options || {};

  // set request method
  postOptions.method = 'POST';

  // set content type header
  postOptions.headers = postOptions.headers || {};
  postOptions.headers['Content-type'] = 'application/json';

  // add resource to body
  postOptions.body = JSON.stringify(resource);

  return request(url, postOptions, token);
}

/**
 * Puts a resource to a url, returning a promise
 *
 * @param  {string} url       The URL we want to put to
 * @param  {object} resource  The resource we want to put
 * @param  {string} [token]   The authentication token
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export function putResource(url, resource, token, options) {
  const putOptions = options || {};

  // set request method
  putOptions.method = 'PUT';

  // set content type header
  putOptions.headers = putOptions.headers || {};
  putOptions.headers['Content-type'] = 'application/json';

  // add resource to body
  putOptions.body = JSON.stringify(resource);

  return request(url, putOptions, token);
}

/**
 * Patches a resource to a url, returning a promise
 *
 * @param  {string} url       The URL of the resource we want to patch
 * @param  {object} data      The data we want to patch
 * @param  {string} [token]   The authentication token
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export function patchResource(url, data, token, options) {
  const patchOptions = options || {};

  // set request method
  patchOptions.method = 'PATCH';

  // set content type header
  patchOptions.headers = patchOptions.headers || {};
  patchOptions.headers['Content-type'] = 'application/json';

  // add data to body
  patchOptions.body = JSON.stringify(data);

  return request(url, patchOptions, token);
}

/**
 * Deletes a resource at a url, returning a promise
 *
 * @param  {string} url       The URL of the resource we want to delete
 * @param  {string} [token]   The authentication token
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           An object containing either "data" or "err"
 */
export function deleteResource(url, token, options) {
  const deleteOptions = options || {};

  // set request method
  deleteOptions.method = 'DELETE';

  // set content type header
  deleteOptions.headers = deleteOptions.headers || {};
  deleteOptions.headers['Content-type'] = 'application/json';

  return request(url, deleteOptions, token);
}
