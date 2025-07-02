// isko padho acche se ki kya kr rha hai

// const asyncHandler = (requestHandler)=>()=>{
//     (req,res,next)=>{
//         Promise.resolve(requestHandler(req, res, next)).catch((error)=>next(error);
//     }
// }




// const asyncHandler = (fn)=>{()=>{}}   ------>(fn)=>()=>{}
// const asyncHandler=(fn)=>async()=>{}


// const asyncHandler = (fn)=>async(req,res,next)=>{
// try {
//     await fn(req, res, next);
// } catch (error) {
//     res.status(error.code||500).json({
//         success: false,
//         message: error.message
//     });
// }
// }





// export{asyncHandler};