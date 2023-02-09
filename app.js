const express=require("express");
const bodyParser=require("body-parser");

const app =express();

var items=[];
var workitems=[];
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));


app.get("/", function(req, res){
var td=new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
td=td.toLocaleDateString("en-US", options)
// console.log(td.getDay());
// switch (td.getDay()) {
//         case 0:
//         td="Sunday";
//         break;
//         case 1:
//             td="Monday";
//         break;
//         case 2:
//             td="Tuesday";        
//         break;
//         case 3:
//             td="Wedneday";
//         break;
//         case 4:
//         td="Thursday";
//         break;
//         case 5:
//         td="Friday";        
//         break;
//         case 6:
//         td="Saturday";
//         break;

//     default:
//         break;
// }


res.render("list", {DAY: td, newitem: items});
});


app.post("/", function(req, res){
let item=req.body.newitem;
if(req.body.btnsub==="Work"){
workitems.push(item);
res.redirect("/work");
}else{
    items.push(item);
    res.redirect("/");
}
});


app.get("/work", function(req, res){
    res.render("list", {DAY:"Work List", newitem: workitems});
});

// app.post("/work", function(req, res){
//     var item=req.body.newitem;
//     workitems.push(item);
//     res.redirect("/work");
// });


app.listen(3000, function(request, rrsponse){
    console.log("hi");
});