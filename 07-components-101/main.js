Vue.component('task', {
    // template: '<li>Foobar</li>'
    template: '<ul><li><slot></slot></li></ul>'
});

new Vue({
    el: '#root'
});