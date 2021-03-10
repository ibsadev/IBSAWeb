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
   * @param {Object} body - the body for the POST/PUT request
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
   * Sends a GET request to the server to Get user info (login functionality)
   * @param {String} email email of the user
   * @param {String} password password of the user
   * @response200 : returns JWT token and user data
   * @response401 : returns error message
   */
  async getUser(email, password) {
    const response = await this.api('/login/', 'POST', {email, password});
    if (response.status === 200 || response.status === 401) {
      return response.json().then(data => data);
    }
    else {
      throw new Error("Problem logging in, please try again next time");
    }
  }
  
  /**
   * Sends a POST request to server and creates a new user.
   * @param {Object} user - JS Object consisting of the user info
   * @response201 : returns empty array of error
   * @response400 : returns an array of error
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

  //fetches holidays
  async getHolidays() {
    const response = await this.api('/holidays', 'GET')
    return response.json().then(data => data);
  }
  
  //fetches instagram data for homepage
  async getHomepageInstagramData() {
    const response = await this.api('/instagram/homepage');
    return response.json().then(apidata => {
      return apidata});
  }

  //fetches past events
  async getPastEvents() {
    const response = await this.api('/instagram/pastevents')
    return response.json().then(apidata => {
      return apidata});
  }

  //fetches upcoming events
  async getUpcomingEvents() {
    const response = await this.api('/instagram/upcomingevents')
    return response.json().then(apidata => {
      return apidata});
  }
}
