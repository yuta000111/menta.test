<template>
  <div class="container">
    <h1>ToDOリスト</h1>
    <label for="radio01"
      >すべて<input id="radio01" type="radio" name="radio"
    /></label>
    <label for="radio02"
      >作業中<input id="radio02" type="radio" name="radio"
    /></label>
    <label for="radio03"
      >完了<input id="radio03" type="radio" name="radio"
    /></label>
    <table>
      <tbdoy>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>完了</th>
        </tr>
        <task v-for="tasks in taskList" :key="tasks[id]" :task-list="tasks" />
      </tbdoy>
    </table>
    <h3>新規タスクの追加</h3>
    <input id="newtask" v-model="task.comment" type="text" /><button
      @click="addTask"
    >
      追加
    </button>
  </div>
</template>

<script>
import task from '@/components/task'
export default {
  components: {
    task
  },
  data: function() {
    return {
      taskList: [],
      task: { id: '', comment: '', workStats: { work: true, done: false } }
    }
  },
  methods: {
    addTask: function() {
      task.id = this.taskList.length + 1
      this.taskList.push(task)
    }
  }
}
</script>

<style lang="scss">
#app {
  width: 50%;
  margin: 0 auto;
}
</style>
