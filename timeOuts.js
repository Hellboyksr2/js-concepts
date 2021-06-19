/**
 * JS TimeOut Functions
 * 
 * Set Timeout - Can B e used if we need to Perform any Action For Some Time (Ex: Show PopUp After 10 Secs of USer Login)
 *          Syntax : setTimeOut( function () {} , <Timeout in Milliseconds>)
 * 
 * Interval - Can be used to Perform Action Periadically (Ex: Update Counter every 10 Secounds)
 *           Syntax : setInterval( function () {} , <Timeout in Milliseconds>)
 * 
 */

setTimeout(() => {
    console.log("Will Log After 10 Secs From SetTimeout")
}, 10 * 1000);

setInterval(() => {
    console.log("Will Log every 10 Secs From setInterval")
}, 10 * 1000);