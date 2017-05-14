<template>
  <div class="pre-container">
    <div class="main">
      <form>
        <div class="input-group">
          <label>你是：</label>
          <label class="radio boy" for="gender_1"></label>
          <label class="radio girl" for="gender_2"></label>
          <input id="gender_1" name="gender" type="radio" v-model="user.gender"/>
          <input id="gender_2" name="gender" type="radio" v-model="user.gender"/>
        </div>
        <div class="input-group radio">
          <label>昵称：</label>
          <input name="nickName" type="text" v-model="user.nickName"/>
        </div>
        <div class="input-group radio">
          <label>年级：</label>
          <select name="grade" v-model="user.grade">
            <option value="1">一年级</option>
            <option value="2">二年级</option>
          </select>
        </div>
      </form>
    </div>
    <div class="btn-group">
      <a class="btn">
        <img src="./go.png"/>
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
      return {
        user: {}
      }
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
  @import "./../../scss/static";
  @import "./../../scss/minxin";

  .main {
    position: relative;
    height: 24.36rem;
    background-image: url("reg@img.png");
    margin-top: size(66) !important;
    @extend .bg-100;
  }

  form {
    position: absolute;
    top: 50%;
    left: 50%;
    overflow: hidden;
    transform: translate(-50%, -50%);
    width: 21.4rem;
    height: 13.6rem;
    margin: 0 auto;
    .input-group {
      margin-top: 1.29rem;
      &:first-child {
        margin: 0;
        label {
          display: inline-block;
          vertical-align: top;
        }
        .radio {
          width: 4.29rem;
          height: 5.5rem;
          @extend .bg-100;
        }
        .boy {
          background-image: url("gender_1_0.png");
          &.active {
            background-image: url("gender_1_1.png");
          }
        }
        .girl {
          margin-left: 1.79rem;
          background-image: url("gender_0_0.png");
          &.active {
            background-image: url("gender_0_1.png");

          }
        }
      }
    }
    input[type="radio"] {
      display: none;
    }
    input, select {
      width: 15.96rem;
      height: 2.7rem;
      border-radius: 1.4rem;
      border: 1px solid #dedede;
      outline: none;
      padding-left: .7rem;
    }
    label:first-child {
      font-size: 1.5rem;
      line-height: 1.79rem;
    }
  }

  .btn-group {
    padding-top: size(36) !important;
    .btn {
      margin: 0 auto;
      display: block;
      width: 12.9rem;
      height: 3.57rem;
      img {
        width: 100%;
      }
    }
  }
</style>
