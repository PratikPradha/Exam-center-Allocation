let arr = [];

let districts_of_bihar = [
  "Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", 
  "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", 
  "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", 
  "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", 
  "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", 
  "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", 
  "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", 
  "Supaul", "Vaishali", "West Champaran"
];

checkings=()=>{
  let bole = confirm("Are you sure want again input field");
  if (bole == true) {
    console.log(bole);
    takeinput();
  }
  
}
Examcenter=(e)=>{
  let random= Math.floor(Math.random()*districts_of_bihar.length);
  alert("Examcenter of user is=>"+"username=>"+e.name+","+"Email=>"+e.email+","+"Examcenter of user=>"+districts_of_bihar[random]);
}


Adduser = (e) => {
  let filtered = arr.filter((USER) => {
    if (USER.email == e.email) {
      return USER;
    }
  });
  if (filtered.length == 0) {
    arr.push(e);
    alert("user added details"+" username=>"+e.name+" ," +"email=>"+ e.email);
    Examcenter(e);
    checkings();
  } else {
    alert("User addaed Exist");
    checkings();
  }
};

takeinput = () => {
  let Name = prompt("Enter Name: ");
  let Email = prompt("Enter Email: ");
  let user = {
    name: Name,
    email: Email,
  };
  console.log("user input obj", user);
  Adduser(user);
};

takeinput();



console.log("Array is", arr);
