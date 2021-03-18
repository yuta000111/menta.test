<template>
  <div class="container">
    <h1>ToDOリスト</h1>
    <label for="radio01"
      >すべて<input
        id="radio01"
        v-model="activeTask"
        value="all"
        type="radio"
        name="radio"
    /></label>
    <label for="radio02"
      >作業中<input
        id="radio02"
        v-model="activeTask"
        value="work"
        type="radio"
        name="radio"
    /></label>
    <label for="radio03"
      >完了<input
        id="radio03"
        v-model="activeTask"
        value="done"
        type="radio"
        name="radio"
    /></label>
    <table>
      <tbdoy>
        <tr>
          <th>ID</th>
          <th>コメント</th>
          <th>状態</th>
        </tr>
        <Task
          :tasklist="sortingTask"
          @remove="removeTask"
          @changestuts="changeStuts"
        ></Task>
      </tbdoy>
    </table>
    <h3>新規タスクの追加</h3>
    <input id="newTask" v-model="comment" type="text" /><button
      @click="makeTask"
    >
      追加
    </button>
  </div>
</template>

<script>
import Task from '@/components/task.vue'
export default {
  components: {
    Task
  },
  data: function() {
    return {
      id: '',
      comment: '',
      workStuts: true,
      task: {},
      taskList: [],
      activeTask: ''
    }
  },
  computed: {
    sortingTask: function() {
      if (this.activeTask === '') {
        return this.taskList
      } else if (this.activeTask === 'all') {
        return this.taskList
      } else if (this.activeTask === 'work') {
        return this.taskList.filter(function(value) {
          return value.stuts === true
        })
      } else if (this.activeTask === 'done') {
        return this.taskList.filter(function(value) {
          return value.stuts === false
        })
      } else {
        return this.taskList
      }
    }
  },
  methods: {
    makeTask: function() {
      this.id = this.taskList.length + 1
      this.task.id = this.id
      this.task.comment = this.comment
      this.task.stuts = this.workStuts
      this.taskList.push(this.task)
      this.comment = ''
      this.task = {}
    },
    remakeTask: function() {
      this.taskList.map(function(value, index) {
        value.id = index + 1
      })
    },
    removeTask: function(taskid) {
      this.taskList.splice(taskid - 1, 1)
      this.remakeTask()
    },
    changeStuts: function(stutsId) {
      this.taskList.filter(function(value) {
        if (stutsId.id === value.id) {
          value.stuts = !stutsId.stuts
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin: 0 auto;
}
</style>
