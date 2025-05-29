const errorHandler=(err,req,res,next) => {
    const statusCode=res.statusCode ? res.statusCode :500;
   
    switch(statusCode)
    {
        case 400:
            res.json({title:"Validation failed",message:err.message,stackTrace:err.stack}); 
            break;
        case 404:
            res.json({title:"NOT FOUND",message:err.message,stackTrace:err.stack});
            break;
        case 401:
            res.json({title:"unauthorized",message:err.message,stackTrace:err.stack});
            break;
        case 403:
            res.json({title:"forbidden",message:err.message,stackTrace:err.stack});
            break;
        case 500:
            res.json({title:"server error",message:err.message,stackTrace:err.stack});
            break;
        default:
            console.log(err.message);
            break;
    }
};

module.exports= errorHandler;