import axios from 'axios';
const ROOT_URL = 'http://localhost:3000';
// Save Applied Jobs to data base
export function saveAppliedJobs(data) {
  const response = axios.put(`${ROOT_URL}/userjobs`, data);
  return response;
}
// Get All applied Jobs
export function fetchAppliedJobs(data) {
  const response = axios.get(`${ROOT_URL}/userjobs`, data);
  return response;
}
// Save Preferences
export function savePreferences(data) {
  const response = axios.put(`${ROOT_URL}/userpreference`, data);
  return response;
}
// Fetch Preferences
export function fetchPreferences(data) {
  const response = axios.get(`${ROOT_URL}/userpreference`, data);
  return response;
}


/************************ Axios call for profile page *******************************************************/

// ajax call to get all the recommendation a user has (Approved)
export function fetchApprovedRecommendation(data) {
	const response = axios.get(`${ROOT_URL}/userrecommendation/approved`, data);
	return response;
}

// ajax call to get all recommendations of a user (Approved + Pending + Rejectd)
export function fetchUserRecommendations(data) {
  const response = axios.get(`${ROOT_URL}/userrecommendation`, data);
  return response;
}

// ajax call to get  all the  pending recommendations i.e recommend someone data
export function fetchPendingRecommendationRequests(data){
  const response = axios.get(`${ROOT_URL}/userrecommendation/pendingrequest`, data);
  return response;
}

// ajax call to decline a pending recommendation request
export function declinePendingRecommendationRequest(data){
  const response = axios.put(`${ROOT_URL}/userrecommendation/pendingrequest/reject`, data);
  return response;
}
