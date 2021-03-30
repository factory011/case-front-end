Vue.component('card', {
  // 定义子组件属性
  props: {
    cardTitle: {
      type: String,
      default: '这是一个列表'
    },
    list: {
      type: Array,
      default: []
    }
  },
  // 定义模板
  template: `
  <div class="modal">
    <div class="modal-header">
      <h4>{{cardTitle}}</h4>
    </div>
    <div class="modal-content">
      <slot name="modal-content">我是一个插槽，可自定义扩展的区域</slot>
      <ul>
        <li v-for="(item,index) in list">{{item}}</li>
      </ul>
    </div>
    <div class="modal-footer">
      <slot name="modal-footer">
        <input type="button" class="btn" value="ok" @click="okHandle">
        <input type="button" class="btn" value="cancel" @click="cancelHandle">
      </slot>
    </div>
  </div>
        `,
  // 定义方法
  methods: {
    // ok
    okHandle() {
      this.$emit('ok');
      console.log(1324);
    },
    // cancel
    cancelHandle() {
      this.$emit('cancel')
    }
  }
})