const { success } = require("../Helper/Response");
const mysqlconnection = require("../Confg/MysqlDBConnection");


exports.list = async (req,res)=>{
    try {
        mysqlconnection.query("SELECT * from movies",(err,rows,fields)=>{
            if(err){
                return  success({res,msg:err.message,data:{}, status:500});

            }
            return  success({res,msg:"Movies Found!",data:rows, status:200});
        })
    } catch (error) {
        return  success({res,msg:error.message,data:{}, status:500});

        
    }
};


exports.newMovie = async (req,res)=>{
    try{
        
        const data = req.body;
        let sql = "INSERT INTO movies SET ?"
        let post = {
            tconst : req.body.tconst,
            titleType : req.body.titleType,
            primaryTitle : req.body.primaryTitle,
            runtimeMinutes : req.body.runtimeMinutes,
            genres : req.body.genres,
            
            
        }
        mysqlconnection.query(sql,post,(err,result,fields)=>{
            if(err) return success({res,msg:err.message,data:{},status:500});
            
            return success({res,msg:"Movie Details Successfully saved!",data,status:200});
        })
    }catch(error){
        return success({res,msg:error.message,data:{},status:500});

    }
};




exports.longestdurationmovies= async (req,res)=>{
    try {
        mysqlconnection.query("SELECT tconst,primaryTitle,runtimeMinutes,genres from movies ORDER BY runtimeMinutes DESC LIMIT 10",(err,result,fields)=>{
        
            if(err) return  success({res,msg:err.message,data:{}, status:500});
            
            return  success({res,msg:"Long Duration Movies ",data:result, status:200});
        })
    } catch (error) {
        return  success({res,msg:error.message,data:{}, status:500});

        
    }
};


exports.top_rated_movies= async (req,res)=>{
    try {
        
        mysqlconnection.query("SELECT movies.tconst AS tconst,movies.primaryTitle AS primaryTitle,movies.genres AS genres, ratings.averageRating AS averageRating FROM movies JOIN ratings ON movies.tconst = ratings.tconst WHERE averageRating > 6.0 ORDER BY averageRating",(err,rows,fields)=>{
            if(err){
                return  success({res,msg:err.message,data:{}, status:500});

            }
            return  success({res,msg:"Movies Found",data:rows, status:200});
        })
    } catch (error) {
        return  success({res,msg:error.message,data:{}, status:500});

        
    }
};
