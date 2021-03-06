Vue.component("message", {
  props: ["title", "body"],
  template: `<article class="message" v-show="isVisible">
        <div class="message-header">
          <p>{{title}}</p>
          <button class="delete" @click="hideModal" aria-label="delete"></button>
        </div>
        <div class="message-body">
          {{body}}
        </div>
      </article>`,

  data() {
    return {
      isVisible: true,
    };
  },

  methods: {
    hideModal() {
      this.isVisible = false;
    },
  },
});

new Vue({
  el: "#root",
});
