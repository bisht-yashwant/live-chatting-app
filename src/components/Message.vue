<template>
  <div :class='["message", { dark }]'>
  <h5>{{ dark ? 'Me' : author }}</h5>
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Message',
  props: [
    'text', // Content of the message
    'author', // Author of the message
    'dark' // Background variant of the box
  ]
}
</script>

<style scoped>

.message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 15px;
    max-width: 70%;
    word-wrap: break-word;
    align-self: flex-start;
    background: #fff;
    color: #000;
    border-top-left-radius: 0;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    text-align: left;
}
.message.dark {
  background: #e9eaf6;
    align-self: flex-end;
    background: #5457c1;
    color: #fff;
    border-top-right-radius: 0;
    border-top-left-radius: 15px;
}

h5 {
  margin: 0 0 .5rem 0;
}
</style>
