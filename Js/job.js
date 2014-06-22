class Job{
	constructor() {
		this.path="";
		this.jobTitle="";
		this.companyTitle="";
	}
	loadJob(jobObject){

	}
	serialise(){
		return{
			path: this.path
		};
	}
}
module.exports = Job