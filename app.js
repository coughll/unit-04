var employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const print = function() {
  for (let i=0; i<employeeList.length; i++) {
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
}

const verify = function(name) {
  let flag = false;
  for (let i = 0; i<employeeList.length; i++) {
    if (name == employeeList[i].name) {
      flag = true;
    }
  }
  if (flag == true ) {
    render("True");
  }
  if (flag == false) {
    render ("False");
  }
}

const lookup = function(promptName) {
  let flag = false;
  let employeeNum = null;
  for (let i = 0; i<employeeList.length; i++) {
    if (employeeList[i].name == promptName) {
    flag = true;
    employeeNum = i;
    }
  }
  if (flag == true) {
    render(employeeList[employeeNum].name);
    render(employeeList[employeeNum].officeNum);
    render(employeeList[employeeNum].phoneNum);
  }
  if (flag == false) {
    render("Thet person isn't an employee, try agian.");
  }
}

const contains = function() {
  for (let i = 0; i<employeeList.length; i++) {
    let temp = employeeList[i].name;
    if (temp.includes(string) == true) {
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}

const update = function(promptName) {
  var inputObj = [
    name = "",
    officeNum = "",
    phoneNum = "",
  ];
  let flag = false;
  for (let i = 0; i<employeeList.length; i++) {
    if (employeeList[i].name == promptName) {
      inputObj.name = prompt("Enter a new name:");
      inputObj.officeNum = prompt("Enter a new office number:");
      inputObj.phoneNum = prompt("Enter a new phone number:");
      employeeList[i].name = inputObj.name;
      employeeList[i].officeNum = inputObj.officeNum;
      employeeList[i].phoneNum = inputObj.phoneNum;
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
    }
  }
}

const add = function(promptName) {
  employeeList.push ({
  name: promptName,
  officeNum: prompt("Enter a new office number:"),
  phoneNum: prompt("enter a new office number"),
  });
  print();
}

const deleteEmployee = function(promptName) {
  let ident = -1;
  for (let i = 0; i<employeeList.length; i++) {
    if (promptName == employeeList[i].name) {
      ident = i;
    }
  }
  delete employeeList[ident].name;
  delete employeeList[ident].officeNum;
  delete employeeList[ident].phoneNum;
  print();
}