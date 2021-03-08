<template>
  <div>
    <tr v-for="task in tasklist" :key="task.id">
      <td>{{ task.id }}</td>
      <td>{{ task.comment }}</td>
      <td>
        <button v-if="task.work">作業中</button
        ><button v-if="task.done">完了</button
        ><button @click="removeTask(task.id)">削除</button>
      </td>
    </tr>
  </div>
</template>

<script>
export default {
  props: {
    tasklist: {
      type: Array,
      required: true
    }
  },
  methods: {
    removeTask: function(taskid) {
      this.$emit("remove", taskid);
    }
  }
};
</script>

<style></style>
