const mongoose  = require("mongoose");
// const mongoosePaginate = require("mongoose-paginate-v2");


const MoviesSchema = new mongoose.Schema({
    tconst:{
        type:String,
        required:true,
    },
    titleType:{
        type:String,
        required:true,
    },
    primaryTitle:{
        type:String,
        required:true,

    },
    runtimeMinutes:{
        type:Number,
        required:true,

    },
    genres:{
        type:String,
        required:true,

    }
},
{
    versionKey:false,
    toJSON:{
        transform(doc,res){
            delete res.__v;
            delete res._id;
        }
    }
});

// }).plugin(mongoosePaginate);

module.exports = mongoose.model("Movies",MoviesSchema);
