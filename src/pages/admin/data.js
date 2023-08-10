const columns = [
  {name: "ID", uid: "id"},
  {name: "NAME", uid: "name", sortable: true},
  {name: "SEMESTER", uid: "semester", sortable: true},
  {name: "COUNTRY", uid: "country"},
  {name: "EMAIL", uid: "email"},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Active", uid: "active"},
  {name: "Paused", uid: "paused"},
  {name: "Vacation", uid: "vacation"},
];

let list = await fetch("http://localhost:3000/api/hello");
let data = await list.json();
let users = data.results;

export {columns, users, statusOptions};
