<template>
  <div class="pre-container">
    <div class="main">
      <img src="./pre@img.png"/>
    </div>
    <div class="btn-group">
      <a class="btn">
        <img src="./btn_go_on.png"/>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    // 组件名称
    name: '',
    // 组件数据
    data () {
      return {}
    },
    // 子组件列表
    components: {},
    // 组件实例被创建之后被调用
    created () {
      console.log('created')
    },
    beforeMount () {
      console.log('beforeMount')
    },
    // dom加载完成之后调用，类似于ready
    mounted () {
      console.log('mounted')
    },
    // 在页面初始渲染视图之后，一旦监测到data发生变化，在变化的数据重新渲染视图之前会触发beforeUpdate钩子函数，这也是重新渲染之前最后修改数据的机会
    beforeUpdate () {
      console.log('beforeUpdate')
    },
    // 在data发生变化渲染更新视图之后触发
    updated () {
      console.log('updated')
    },
    // 计算属性
    computed: {},
    // 方法
    methods: {}
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" rel='stylesheet/scss'>
  .btn-group {
    padding-top: 1.86rem;
    .btn {
      margin: 0 auto;
      display: block;
      width: 9.2rem;
      height: 3.57rem;
      img {
        width: 100%;
      }
    }
  }
</style>
