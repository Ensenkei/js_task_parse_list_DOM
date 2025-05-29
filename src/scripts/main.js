'use strict';

const list = document.querySelector('ul');
const items = Array.from(list.children);

function parseSalary(salaryStr) {
  const noDollar = salaryStr.split('$').join('');
  const noComma = noDollar.split(',').join('');

  return parseInt(noComma);
}

// eslint-disable-next-line no-shadow
function sortList(list) {
  items.sort((a, b) => {
    const salaryA = parseSalary(a.dataset.salary);
    const salaryB = parseSalary(b.dataset.salary);

    return salaryB - salaryA;
  });

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(_list) {
  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: item.dataset.age,
  }));
}

sortList(list);

// eslint-disable-next-line no-unused-vars
const employees = getEmployees(list);
