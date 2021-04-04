const photo = document.querySelector('.contact-photo');
const name = document.querySelector('.contact-name');
const numb = document.querySelector('.contact-number');
const title = document.querySelector('.contact-title');
const email = document.querySelector('.contact-email');
const btn1 = document.querySelector('.contact-btn1');
const btn2 = document.querySelector('.contact-btn2');


let counter = 0;

const contacts = [
  {
    img: 'maltin1.JPG',
    name: 'Martin Sichibeya',
    number: '0976035766',
    title: 'Founder & Chairman',
    email: 'sichibeyam@gmail.com'
  },
  {
    img: 'oga.JPG',
    name: 'Oga Master Mabele',
    number: '0975123378',
    title: 'Chief Operational Officer (COO)',
    email: 'ogamabele@gmail.com'
  },
  {
    img: 'v.JPG',
    name: 'Vanessa Sililo',
    number: '0977002299',
    title: 'Chief Technical Officer (CTO)',
    email: 'Vsililo@gmail.com'
  },
  {
    img: 'michie.JPG',
    name: 'Michelle De Beer',
    number: '0971000518',
    title: 'Chief Financial Officer (CFO)',
    email: 'michieBeer@gmail.com'
  },
  {
    img: 'abc.JPG',
    name: 'Marsia R Sichibeya',
    number: '0954280772',
    title: 'Chief Executive Officer (CEO)',
    email: 'Marsiaroy@gmail.com'
  }
];

window.addEventListener('DOMContentLoaded', function(){
 
  myContact();
  });
  
  function myContact(person){
    
  let item = contacts[person];
  photo.src = item.img;
  name.innerHTML = item.name;
  numb.innerHTML = item.number;
  title.innerHTML = item.title;
  email.innerHTML = item.email;
  }
  
  
  btn1.addEventListener('click', function(){
    counter++;
    if(counter > contacts.length - 1){
     counter = 0;
    }
      myContact(counter);
  
  });
  
  btn2.addEventListener('click', function(){
    counter--;
    if( counter < 0){
      counter = contacts.length - 1;
    }
    myContact(counter);
   }); 