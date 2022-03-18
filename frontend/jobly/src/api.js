import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interaction with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. You are only expected to 
    //read this code for this project.
    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
        ? data
        : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      const message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    const res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get list of all companies */

  static async getAllCompanies(name) {
    const query = name !== "" ? `/?name=${name}`:"";
    const res = await this.request(`companies${query}`);
    return res.companies;
  }

  /** Get list of all jobs */
  
  static async getAllJobs(title) {
    const query = title !== "" ? `/?title=${title}`:"";
    const res = await this.request(`jobs${query}`);
    return res.jobs;
  }

    /** Get details on a user by username. */

    static async getUser(username) {
      const res = await this.request(`users/${username}`);
      return res.user;
    }

    /** Update user profile. */

    static async updateUser(username, firstName, lastName, email, password) {
      const updateData = {firstName, lastName, email, password}
      const res = await this.request(`users/${username}`, 
                  updateData, 'patch');
      return res.user;
    }

    /** Authenticate username/password and return token */

    static async authenticateUser(username, password) {
      const res = await this.request('auth/token', {username, password}, 'post');
      JoblyApi.token = res.token;
      return res.token;
    }

    /** Register new user and return token */

    static async registerUser(user) {
      const {username, password, firstName, lastName, email} = user;
      const res = await this.request('auth/register', 
                          {username, password, firstName, lastName, email}, 'post');
      JoblyApi.token = res.token;
      return res.token;
    }

    /** Apply to job */

    static async applyToJob(username, id, token) {
      JoblyApi.token = token;
      const res = await this.request(`users/${username}/jobs/${id}`, {}, 'post');
      console.log(res)
      return res;
    }

}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//     "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//     "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;