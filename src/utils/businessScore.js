export function calculateBusinessScore(data){

let revenue=0;
let customer=0;
let operations=0;
let employees=0;
let technology=0;

/*=========================
Revenue
=========================*/

revenue=
(
Number(data.revenueGrowth||0)+
Number(data.newCustomers||0)+
Number(data.followUp||0)+
Number(data.referrals||0)+
Number(data.retention||0)
)/5;

/*=========================
Customer Experience
=========================*/

customer=
(
Number(data.website||0)+
Number(data.reviews||0)+
Number(data.response||0)+
Number(data.communication||0)+
Number(data.customerFollowup||0)
)/5;

/*=========================
Operations
=========================*/

operations=
(
Number(data.scheduling||0)+
Number(data.workflow||0)+
Number(data.automation||0)+
Number(data.crm||0)+
Number(data.reporting||0)
)/5;

/*=========================
Employees
=========================*/

employees=
(
Number(data.recruiting||0)+
Number(data.retentionEmployees||0)+
Number(data.leadership||0)+
Number(data.morale||0)+
Number(data.benefits||0)
)/5;

/*=========================
Technology
=========================*/

technology=
(
Number(data.websiteTech||0)+
Number(data.crmTech||0)+
Number(data.ai||0)+
Number(data.texting||0)+
Number(data.phone||0)
)/5;

const overall=

(
revenue+
customer+
operations+
employees+
technology

)/5;

return{

revenue:Math.round(revenue*20),

customer:Math.round(customer*20),

operations:Math.round(operations*20),

employees:Math.round(employees*20),

technology:Math.round(technology*20),

overall:Math.round(overall*20)

};

}
