/* 
 * Configuration file for setting global variables
 * 
 * @author: Dejan Dežman <dejan.dezman@cosylab.com>
 */

// For accessing the REST service
var serviceurl = "http://localhost:8080/Olog/resources/";

// For all the dates shown in client
// Mormat docs can be found at http://momentjs.com/docs/#/displaying/format/
var dateFormat = "MMMM Do YYYY, h:mm a";

// How many logs do you want to load per request?
var numberOfLogsPerLoad = 20;

// Set the name of the cookie that holds selected filters
var filtersCookieName = "filters";