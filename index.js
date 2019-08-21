const express=require('express');
const path=require('path');
const port=585;

const db=require('./config/mongoose');
const Contact=require('./models/contact');
const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.urlencoded());
app.use(express.static('assests'));

app.get('/', function (req,res) {
        Contact.find({},function (err,contacts) {
                if(err){
                        console.log("error in fecting contacts from db");
                        return;
                }

                return res.render('home', {
                        //sending to the server details of template
                        title: "Contact List",
                        contact_list: contacts
                });

        })
})

app.get('/practice', function (req,res) {
        res.render('practice',{
                title:"Playground"
        });
})





var contactList = [
        {
                name: "Jay Prakash",
                phone: "9835582472"
        },
        {
                name: "Jitendra",
                phone: "8102061779"
        },
        {
                name: "Vikash",
                phone: "7250325018"
        },
        {
                name: "Jyoti",
                phone: "8252678376"
        },
        {
                name: "Manoj",
                phone: "9955858814"
        }
]

app.post('/create-contact',function(req,res){
        console.log("contact-added");
        
        // contactList.push(req.body);
        // contactList.unshift(req.body);

        //adding to database
        Contact.create({
                name: req.body.name,
                phone:req.body.phone
        }, function(err,newContact){
                if(err){
                        console.log('error in creating a contact');
                       return; 
                }

                console.log('Contact Added to Database');
        }
        );

        return res.redirect('back');
});

function cmpByName(arr1, arr2) {
        var a = arr1.name.toLowerCase(), b = arr2.name.toLowerCase();
        if (a > b) return 1;
        else if (a < b) return -1;
        else return 0;
}

app.post('/sort-contact-by-name', function (req, res) {
        console.log("doing sorting");
        contactList.sort(cmpByName);
        return res.redirect('back');
});

app.get('/delete-contact', function(req,res){
        //get the id from query parameter 
        var id = req.query.id;

        //find the contact in the db and usig id delete it
        Contact.findByIdAndDelete(id,function(err){
                if(err){
                        console.log('error in deleting from db');
                        return;
                }
        });
        return res.redirect('back');
});













































// Handing Invalid urls
app.get('*', function (req, res) {
        res.send("This is Invalid Page");
})


app.listen(port, function (err) {
        if (err) {
                console.log("Error Occured");
                return;
        }
        console.log("Running Succesfully on Port:", port);
        // console.log(__dirname);
});
