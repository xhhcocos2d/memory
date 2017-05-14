<template>
  <div class="container">
    <h1 class="title">用1分钟时间，请牢牢记住下面的图片。</h1>
    <ul class="memory clear">
      <li><img src="./../../assets/data/memory/1.png"></li>
      <li><img src="./../../assets/data/memory/2.png"></li>
      <li><img src="./../../assets/data/memory/3.png"></li>
      <li><img src="./../../assets/data/memory/1.png"></li>
      <li><img src="./../../assets/data/memory/2.png"></li>
      <li><img src="./../../assets/data/memory/3.png"></li>
    </ul>
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
  @import "./../../scss/minxin";

  .container {
    overflow: hidden;
    margin: 0 auto;
    width: 100%;
    padding: size(15);
  }

  .title {
    font-size: size(19);
    line-height: size(30);
    text-align: left;
    margin-top: size(15);
    color: #803e10;
  }

  .memory li {
    width: size(98);
    display: block;
    overflow: hidden;
    float: left;
    margin-right: size(25);
    margin-top: size(25);
    @media screen and (max-width: 330px) {
      margin-right: size(20);
      margin-top: size(20);
    }
  }

  .memory li img {
    height: size(66);
    width: 100%;
  }

  .memory li:nth-child(3n) {
    margin-right: 0;
  }
</style>
