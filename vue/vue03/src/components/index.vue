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
          <th>完了</th>
        </tr>
        <Task :tasklist="activeTaskList" @remove="removeTasklist"></Task>
      </tbdoy>
    </table>
    <h3>新規タスクの追加</h3>
    <input id="newTask" v-model="comment" type="text" /><button
      @click="addTaskList"
    >
      追加
    </button>
  </div>
</template>

<script>
import Task from "@/components/task.vue";
export default {
  components: {
    Task
  },
  data: function() {
    return {
      id: "",
      comment: "",
      stuts: { work: true, done: false },
      task: {},
      taskList: [],
      activeTask: ""
    };
  },
  computed: {
    activeTaskList: function() {
      if (this.activeTask === "" || "all") {
        return this.taskList;
      }
    }
  },
  methods: {
    addTaskList: function() {
      this.id = this.taskList.length + 1;
      this.task.id = this.id;
      this.task.comment = this.comment;
      this.task.stuts = this.stuts;
      this.taskList.push(this.task);
      this.task = {};
    },
    removeTasklist: function(taskid) {
      this.taskList.solice(taskid, taskid);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.container {
  margin: 0 auto;
}
</style>
