
const { success } = require("./Response");


exports.paginateOptions = (req)=>{
    let page = 1;
    let limit = 10;

    if(req.hasOwnProperty("")){
        
        
        if(req.query.hasOwnProperty("page")) page = parseInt(req.query.page);
        if(req.query.hasOwnProperty("limit")) limit = parseInt(req.query.limit);


    }
    return {page,limit};
};

