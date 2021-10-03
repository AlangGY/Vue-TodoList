<template>
  <div class="todo-list__form">
    <form @submit.prevent="addTodo">
      <input
        ref="input"
        type="text"
        placeholder="할일을 입력하세요"
        :value="text"
        :class="{'cant':!isAddable}"
        @input="inputText">
      <button> 등록! </button>
    </form>
  </div>
</template>

<script>
export default {
  emits : ['add-todo'],
  data(){
    return {
      text : ''
    };
  },
  computed : {
    isAddable(){
      return this.text.length > 0;
    }
  },
  methods : {
    inputText(){
      const text = this.$refs.input.value;
      this.text = text;
    },
    addTodo(){
      if (this.isAddable){
        this.$emit('add-todo', this.text.trim());
        this.text = '';
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.todo-list__form{
  form {
    input {
      &.cant {
        outline: 1px solid red;
      }
    }
    button {

    }
  }
}
</style>