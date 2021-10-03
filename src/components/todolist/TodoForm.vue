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
  margin-top: 30px;
  width: 100%;
  form {
    padding: 20px;
    width: 100%;
    input {
      width: 100%;
      height: 30px;
      text-align: center;
      font-size: 20px;
      border-radius: 5px;
      border: none;
      box-shadow: 0 0 3px 1px rgba(black,0.3);
      &:focus {
        outline: 1px solid $color-green;
      }
      &.cant:focus {
        outline: 1px solid $color-red;
      }
    }
  }
}
</style>