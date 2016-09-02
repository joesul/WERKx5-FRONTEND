import axios from 'axios';

export default {

  zipcode: function(zipcode){
    console.log("search by zipcode", zipcode);
    return axios.get('https://shrouded-fjord-15245.herokuapp.com/jobs/' + zipcode);
  },

  listed: function(uid) {
    console.log("search by uid", uid);
    return axios.get('https://shrouded-fjord-15245.herokuapp.com/jobs/list/' + uid);
  },

  all: function() {
    console.log("helper view all");
    return axios.get('https://shrouded-fjord-15245.herokuapp.com/jobs/');
  },

  add: function(job) {
    console.log("helper add job", job);
    return axios.post('https://shrouded-fjord-15245.herokuapp.com/jobs/new', job);
  },

  take: function(jobId, data) {
    console.log("helper take job by ID", data.id);
    console.log("helper take job with userID", data.username)
    return axios.put('https://shrouded-fjord-15245.herokuapp.com/jobs/take/' + data.id, data)
  },

  work: function(user) {
    console.log("helper work", user);
    return axios.get('https://shrouded-fjord-15245.herokuapp.com/jobs/work/' + user);
  },

  delete: function(jobId, data) {
    console.log("helper take job by ID", data.id);
    console.log("helper take job with userID", data.username)
    return axios.delete(' https://shrouded-fjord-15245.herokuapp.com/jobs/' + jobId);
  },

  update: function(jobId) {
    console.log("helper update", jobId);
    return axios.put('https://shrouded-fjord-15245.herokuapp.com/jobs/status/' + jobId)
  },

  grab: function(jobId) {
    console.log("helper grab", jobId);
    return axios.get('https://shrouded-fjord-15245.herokuapp.com/jobs/forupdate/' + jobId)
  },

  edit: function(data) {
    console.log("helper", data);
    return axios.put('https://shrouded-fjord-15245.herokuapp.com/jobs/edit/' + data.id, data)
  }
}
