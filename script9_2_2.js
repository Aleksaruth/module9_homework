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

const parser = new DOMParser();
const result = [];

const xmlDOM = parser.parseFromString(xmlString, "text/xml");
const studentNode = xmlDOM.querySelectorAll("student");

studentNode.forEach(node => {
  let student = {
    name:`${node.querySelector("first").textContent} ${node.querySelector("second").textContent}`,
    age:node.querySelector("age").textContent,
    prof:node.querySelector("prof").textContent
  }
  result.push(student);

  
  
});

console.log(result);

