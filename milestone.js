//METAPROGRAMMING
let handler = {
  get(target, name) {
    return name in target ? target[name] : 42
  }
}

let p = new Proxy({}, handler)
p.a = 1
console.log(p.a, p.b)
//REGULAR EXPRESSIONS
function valid_email(str)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;  
if(mailformat.test(str))
{  
console.log("Valid email address!");  
}  
else  
{  
console.log("You have entered an invalid email address!");  
}
}

valid_email('me-info@example.com');
//PROTOTYPE BASED OBJECT ORIENTED PROGRAMMING
const object1 = { a: 1, b: 2, proto: c };
console.log(object1.a);
const a = 'foo';
const b = 42;
const c = {};
const object2 = { a: a, b: b, c: c };
console.log(object2.b);
const object3 = { a, b, c };
console.log(object3.a);


