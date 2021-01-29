import config from './config';
import Cookies from 'js-cookie'

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
   */
  api(path, method = 'GET', body = null) {
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

    return fetch(url, options);
  }

  /**
   * Sends a GET request to the server to Get user info.
   * - 200 : returns a JSON of user data
   * - 401 : returns null
   * @param {String} email
   * @param {String} password 
   */
  async signIn(email, password) {
    const response = await this.api('/login/', 'POST', {email, password});
    if (response.status === 200 || response.status === 401) {
      if (response.success === true) {
        Cookies.set("jwt", response.token)
      }
      return response.json().then(data => data);
    }
    else {
      throw new Error("Problem logging in, please try again next time");
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

  /**
   * Make a GET request to server to get holidays
   */
  async getHolidays() {
    const response = await this.api('/holidays/', 'GET')
    return response.json();
  }
}
