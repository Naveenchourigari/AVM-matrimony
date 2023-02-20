const firebaseConfig = {
    apiKey: "AIzaSyCHbj3CPAy1KbLJ7rCLHCWQs0O7vVVZ7_k",
    authDomain: "contactform-922bc.firebaseapp.com",
    databaseURL: "https://contactform-922bc-default-rtdb.firebaseio.com",
    projectId: "contactform-922bc",
    storageBucket: "contactform-922bc.appspot.com",
    messagingSenderId: "880134898616",
    appId: "1:880134898616:web:35bf09141283cc36e5054d"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var contactFormDB=firebase.database().ref("contactForm");
  document.getElemntById("contactForm").addEventListener("submit",submitForm);
  function submitForm(e){
  e.preventDefault(); 

  var Email=getElementval("name");
  var password=getElementval("password");
  saveMeassages(Email,password,submit);
}
const saveMessages=(Email,password,submit)=>{
    var newContactForm=contactFormDB.push();
    newContactForm.set({
        Email:Email,
        password:password
    })
}
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
