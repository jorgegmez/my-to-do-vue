Vue.component('App', {
  <template>
    <div>
      <h1>This is my Vue App!!</h1>
    </div>
  </template>
});
<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
