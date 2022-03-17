import { createApp } from "vue/dist/vue.esm-bundler";
import HelloWorldVue from "./components/HelloWorld.vue";
import { ref, watch } from 'vue'
window.globalStuff = {}
window.globalStuff.globalTestMessage = ref("Yo whats up?")
window.globalStuff.someNumber = ref(0)

watch(window.globalStuff.someNumber, (count, prevCount) => {
  console.log({
    count, prevCount
  })
})

const app = createApp({
  data() {
    return {
      name: "App",
      count: 299,
      window
    };
  }
});
app.component('HelloWorld', HelloWorldVue)

app.mount("#app");
