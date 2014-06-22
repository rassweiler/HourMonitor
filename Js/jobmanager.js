var Job = require('../Compiled/job.js');

class JobManager{
	constructor() {
		this.jobs = [];
		this.active_job = null;

		this.newJob();
	}
	newJob(){
		var job = new Job();
		job.path = "../Jobs/test.jerb";
		this.jobs.push(job);
	}
	serialise(){
		var openJobs = [];

	    for(var job of this.jobs){
	      openJobs.push(job.serialise());
	    }
	    return {
	    	OpenJobs: openJobs 
	    }
	}
}
module.exports = JobManager