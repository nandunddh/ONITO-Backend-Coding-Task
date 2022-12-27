// const mongoose  = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate-v2")

// exports.paginateResponse = ({
//     res,
//     data = [],
//     status = 200,
//     msg
// }) => {
//     let success = true;

//     if (Object.keys(data).length === 0) success: false;

    

//     const {
//         docs,
//         ...rest
//     } = data;
//     return res.status(status).json({
//         success,
//         msg,
//         data: docs,
//         ...rest,
//     });
// };


exports.success = ({res,data={},status = 200 ,msg})=>{
    let success = true;
    if(data.length == 0 && typeof data === "Array") success = false;
    if(Object.keys(data).length === 0) success=false;

    if(success === false)
    {

        return res.status(status).json({
            success,
            msg,
            data,
            
            
        });
    }
    return res.status(status).json({
        success ,
        msg,
        data,
    });
};

