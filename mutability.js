   /* const clone1 = {
    name: console.log(person.name),
    age: console.log(person.age),
    country:console.log(person.country) ,
  }
  Object.freeze(clone1)
  
  const clone2 = {
    name: console.log(person.name),
    age: console.log(person.age),
    country: console.log(person.country),
  }
  Object.freeze(clone2)*/
  const clone1 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
  const clone2 = {
    name: 'Rick',
    age: 77,
    country: 'US',
  }
  let samePerson = person
  samePerson.age = 78
  samePerson.country ='FR'
  
  
  
  