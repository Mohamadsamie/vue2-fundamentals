Vue.component("task-list", {
  template: '<div><task v-for="task in tasks">{{ task.task }}</task></div>',
//   div tag in this componetnt is as a root element
  data() {
    return {
      tasks: [
        { task: "task no.1 description", completed: true },
        { task: "task no.2 description", completed: false },
        { task: "task no.3 description", completed: true },
        { task: "task no.4 description", completed: false },
        { task: "task no.5 description", completed: true },
        { task: "task no.6 description", completed: true },
        { task: "task no.7 description", completed: false },
      ],
    };
  },
});

Vue.component("task", {
  // template: '<li>Foobar</li>'
  template: "<ul><li><slot></slot></li></ul>",
});

new Vue({
  el: "#root",
});
