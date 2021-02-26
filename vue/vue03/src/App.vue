<template>
  <div>
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
      </tbdoy>
    </table>
    <h3>新規タスクの追加</h3>
    <input id="newtask" type="text" /><button>追加</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      id: "",
      task: {},
      comment: ""
    };
  }
};
</script>

<style lang="scss"></style>
