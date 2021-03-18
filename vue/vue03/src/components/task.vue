<template>
  <div>
    <tr v-for="task in tasklist" :key="task.id">
      <td>{{ task.id }}</td>
      <td>{{ task.comment }}</td>
      <td>
        <button
          v-show="task.stuts === true"
          @click="toggleStuts({ id: task.id, stuts: task.stuts })"
        >
          作業中
        </button>
        <button
          v-show="task.stuts === false"
          @click="toggleStuts({ id: task.id, stuts: task.stuts })"
        >
          完了
        </button>
        <button @click="removeTask(task.id)">削除</button>
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
  data: function() {
    return {
      taskStatus: '',
      isWorking: true
    }
  },
  methods: {
    removeTask: function(taskid) {
      this.$emit('remove', taskid)
    },
    toggleStuts: function(stutsId) {
      this.$emit('changestuts', stutsId)
    }
  }
}
</script>

<style></style>
