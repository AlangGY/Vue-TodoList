<template>
  <div class="app__inner">
    <div class="app__title"></div>
    <div class="app__todo-list">
      <div class="todo-list__form">
        <form @submit.prevent>
          <input
            type="text"
            placeholder="할일을 입력하세요">
          <button> 등록! </button>
        </form>
      </div>
      <div class="todo-list__lists">
        <ul>
          <li>할일 1</li>
          <li>할일 2</li>
        </ul>
      </div>
      <div class="todo-list__count">
        <span class="count__done">0</span>
        <span class="divider">/</span>
        <span class="count__total">2</span>
      </div>
    </div>
  </div>
</template>
