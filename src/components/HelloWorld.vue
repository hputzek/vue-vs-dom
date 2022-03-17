<template>
  <div class="hello">
    <h3>Message via non reactive prop</h3>
    <p><pre>{{JSON.stringify(nonReactivePropTest, null,2)}}</pre></p>
    <h3>Message via reactive prop:</h3>
    <p>{{ reactivePropTest }}</p>
    <h3>HTML Tag</h3>
    <p>
     I am a 'p'-Tag
    </p>
    <h3>Slut</h3>
    <slot/>
    <h3>Two way binding test (v-model)</h3>
    <p>{{modelValue}}</p><button @click="$emit('update:modelValue', modelValue + 1)">+</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    nonReactivePropTest: String,
    reactivePropTest: String,
    modelValue: Number
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
  background: #eee;
  padding: 1rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

<style>
body {
  font-family: sans-serif;
}
</style>
