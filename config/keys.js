if(process.env.NODE_ENV==='production'){
    // module.exports=require('./prod')
    console.log("Hello during prod");
}
else{
    // module.exports=require('./dev')
    console.log("Hello during development");
}
