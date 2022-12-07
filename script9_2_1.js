
const parser = new DOMParser();

const xmlString = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>
`;
// console.log('xmlString', xmlString);


const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");


let result = {
  list:[]
};
studentNode.forEach(elem => {
  

  let firstNameNode = elem.querySelector("first");
  firstName = firstNameNode === null? '':firstNameNode.textContent;

  let secondNameNode = elem.querySelector("second");
  secondName = secondNameNode === null? '':secondNameNode.textContent;

  let ageNode = elem.querySelector("age");
  age = ageNode === null? '': Number(ageNode.textContent);

  let profNode = elem.querySelector("prof");
  prof = profNode === null? '': profNode.textContent;
  
  
  let nameNode = elem.querySelector("name");
  let lang;
    if (nameNode === null){lang='';
    } else {
      let langAttr = nameNode.getAttribute('lang');
      lang = langAttr === null? '': langAttr;
    }


    result.list.push({
      name:[firstName, secondName].join(' '),
      age:age,
      prof:prof,
      lang:lang
    
    })    
  
});

//{ name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },


console.log(result);

