import config from './config';

/**
 * Data is a is a helper class that provides utility methods to allow React client
 * talk to the Express Server
 */

export default class Data {

  /**
   * method to send server request
   * @param {String} path - path to server
   * @param {String} method - GET/POST/PUT/DELETE
   * @param {Object} body 
   * @param {Boolean} requiresAuth 
   * @param {Object} credentials 
   */
  api(path, method = 'GET', body = null, requiresAuth = false, credentials = null) {
    const url = config.apiBaseUrl + path;
  
    const options = {
      method,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    };

    if (body !== null) {
      options.body = JSON.stringify(body);
    }

    if (requiresAuth) {
      const encodedCredentials = window.btoa(`${credentials.username}:${credentials.password}`);

      options.headers['Authorization'] = `Basic ${encodedCredentials}`;
    }

    return fetch(url, options);
  }

  /**
   * Sends a GET request to the server to Get user info.
   * - 200 : returns a JSON of user data
   * - 401 : returns null
   * @param {String} email
   * @param {String} password 
   */
  async getUser(email, password) {
    const response = await this.api(`/login`, 'POST', null, true, {email, password});
    console.log(response.status)
    if (response.status === 200) {
      return response.json().then(data => data);
    }
    else if (response.status === 401) {
      return null;
    }
    else {
      throw new Error();
    }
  }
  
  /**
   * Sends a POST request to server and creates a new user.
   * - 201 : returns an empty array 'error'
   * - 400 : Returns an array of error
   * @param {Object} user - JS Object consisting of the user info
   */
  async createUser(user) {
    const response = await this.api('/user', 'POST', user);

    // Error handling
    if (response.status === 201) {
      return [];
    }
    else if (response.status === 400) {
      return response.json().then(data => {
        return data.errors;
      });
    }
    else {
      throw new Error();
    }
  }
}
