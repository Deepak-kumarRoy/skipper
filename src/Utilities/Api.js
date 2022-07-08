
const HOST = "http://localhost:5000";
const API = {

    //Login endpoints
    login: HOST+"/authentication/login",
    signup: HOST+"/authentication/signup",

    //approvereq endpoints

    workflow: HOST+"/authentication/workflow",

    //Display endpoints

    reject: HOST+"authentication/reject",
    wf_data: HOST+"authentication/wf_data",
    approve: HOST+"authentication/approve",
    reassign: HOST+"authentication/reassign",

    // Hrform endpoints

    formdata: HOST+"authentication/formdata",

    // editrequest endpoints

    resubmit: HOST+"authentication/resubmit",

    // notification endpoints

    redo: HOST+"authentication/redo",
    status: HOST+"authentication/status",

}

module.exports = API;
