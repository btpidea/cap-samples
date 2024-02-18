const cds = require('@sap/cds');

class ProcessorService extends cds.ApplicationService {
    /** Resigter Custom Handler */
    init() {
        this.before("UPDATE", "Incidents", (req) => this.changeUrgencyDueToSubject(req.data));
        this.before("UPDATE", "Incidents", (req) => this.onUpdate(req));
        return super.init();
    }

    async  onUpdate (req) {
        console.log("in before handler")
      const { status_code }  = await SELECT.one(req.subject, i => i.status_code).where({ID:req.data.ID}) 
      console.log("<<<<status_code ", status_code)
      if (status_code == 'C'){
        return req.reject(`Can't modify a closed ticket`)
      }
    }

    changeUrgencyDueToSubject(data) {
        if (data) {
            const incidents = Array.isArray(data) ? data : [data]
            incidents.forEach(incident => {
                if (incident.title?.toLowerCase().includes("urgent")) {
                    incident.urgency = { code: "L", descr: "Low" };sedkja
                }

            });
        }
    }

}
module.exports = ProcessorService;




