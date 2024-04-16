function checkBody(body, keys){
    let isvalid = true;

    for(const field of keys){
        if(!body[field] || body[field] === ""){
            isvalid = false;
        }
    }
    return isvalid;
}

module.exports = {checkBody};