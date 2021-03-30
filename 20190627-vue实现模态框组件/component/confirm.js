Vue.component('modalBox', {
  props: {
    modalBoxOptions: Object,
  },
  template: `
  <div class="wrap-bg">
    <div class="wrap" :style="'width: ' + options.width + 'px; height: ' + options.height + 'px'">
      <div class="header">
        <slot name="header">
          <h3>{{options.title}}</h3>
        </slot>
      </div>
      <div class="content">
        <slot name="content">
          <p>{{options.text}}</p>
        </slot>
      </div>
      <div class="footer">
        <slot name="footer">
          <input class="btn confirm" type="submit" :value="options.confirmText" @click="submit"></input>
          <input class="btn cancel" type="submit" :value="options.cancelText" @click="cancel"></input>
        </slot>
      </div>
   </div>
  </div>`,
  data() {
    return {
      resolve: '',
      reject: '',
      promise: ''
    }
  },
  computed: {
    options: function () {
      let options = this.modalBoxOptions
      return {
        title: options.title || '提示',
        text: options.text || '这里什么都木有',
        width: options.width || 300,
        height: options.height || 200,
        confirmText: options.confirmText ? options.confirmText : '确定',
        cancelText: options.cancelText ? options.cancelText : '取消'
      }
    }
  },
  methods: {
    submit() {
      this.resolve('submit')
    },
    cancel() {
      this.reject('cancel')
    },
    confirm() {
      this.promise = new Promise((resolve, reject) => {
        this.resolve = resolve
        this.reject = reject
      })
      return this.promise
    }
  }
})