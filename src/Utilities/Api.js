
const HOST = "http://localhost:5000";
const API = {

    //Login endpoints
    login: HOST+"/authentication/login",
    signup: HOST+"/authentication/signup",

    //approvereq endpoints

    workflow: HOST+"/api/workflow",

    //Display endpoints

    reject: HOST+"/api/reject",
    wf_data: HOST+"/api/wf_data",
    approve: HOST+"/api/approve",
    reassign: HOST+"/api/reassign",

    // Hrform endpoints

    formdata: HOST+"/api/formdata",

    // editrequest endpoints

    resubmit: HOST+"/api/resubmit",

    // notification endpoints

    redo: HOST+"/api/redo",
    status: HOST+"/api/status",

}

module.exports = API;
