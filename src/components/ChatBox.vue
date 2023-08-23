<template>
  <form @submit="onSubmit($event)" class="chat-input">
      <input v-model="userMessage" type="text" placeholder="Write your message..." required />
      <button type="submit" class="send-button" :disabled='text === ""'>
          <img src="../assets/send-alt.svg" class="icon" alt="Icon" />
      </button>
  </form>


</template>

<script>
export default {
  name: 'ChatBox',
  data: () => ({

    // To keep the state of the input content
    userMessage: ''
  }),
  methods: {

    // We will call this when the form is submitted
    onSubmit(event) {

      // This fires an event which we will handle
      // in the parent component
      this.$emit("submit", event, this.userMessage);
      this.userMessage = '';
    }
  }
}
</script>

<style scoped>
.chat-input {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 25px;
    padding: 5px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
}

.chat-input input {
    background: #fff;
    color: #000;
    border: none;
    flex-grow: 1;
    padding: 0px 10px 0 10px;
    font-size: 1rem;
    outline: none;
    transition: border-color 0.3s;
    border-radius: 30%;
}

.chat-input input:focus {
    border-color: #007bff;
}

.send-button {
    padding: 5px;
    border: none;
    background: #5457c1;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
}

.icon {
    max-height: 20px;
}
</style>
