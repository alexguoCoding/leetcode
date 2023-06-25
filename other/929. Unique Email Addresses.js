/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    let set=new Set()
    for(let e of emails){
        let sign=e.indexOf('@');
        let local=e.substring(0,sign);
        let domain=e.substring(sign+1,e.length);
        local=local.replaceAll('.','')
        if(local.indexOf('+')>=0){
            local=local.substring(0,local.indexOf('+'))


        }
        let finaladdress=local+"@"+domain;
        //console.log(local)
        set.add(finaladdress);
       // console.log(domain)
         console.log(finaladdress)
    }
    return set.size;

    
};