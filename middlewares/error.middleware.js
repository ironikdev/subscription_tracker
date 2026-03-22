const errorMiddleware=(err,req,res,next)=>{
    try{
        let error ={...err};
        error.message=err.message;
        console.error(err);
        //mongoose bad object id
        if(err.name==='CastError'){
            const message='Resource Not Found';
            error =new Error(message);
            error.statusCode=404;
        }
        //Mongoose duplicate key
        if(err.code===11000){
            const message='Duplicate field value entered';
            error= new Error(message);
            error.sattusCode=400;
        }
        //mongoose validation error
        if(err.name==='ValidationError'){
            const message=Object.value(err.errors).map(val=>val.message);
            error=new Error(message.join(','));
            error.status=400;
        }
        res.status(error.statusCode || 500).json({sucess:false,error:error.mesage || 'Server error'});
    }catch(error){
        next (error);
    }
};

export default errorMiddleware;
