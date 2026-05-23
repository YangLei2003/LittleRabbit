<script setup>
</script>

<template>
  <nav class="app-topnav">
    <div class="container">
      <ul>
        <!-- 先写死true,if成立的话显示这些 -->
        <template v-if="flase">
          <li><a href="javascript:;"><i class="iconfont icon-user"></i>磊宝爱而不得</a></li>
          <li>
            <!-- 当触发了#reference,就会弹出这个el的弹窗 -->n
            <el-popconfirm title="真的要退出吗?" confirm-button-text="狠心离开" cancel-button-text="留下来吧">
            <template #reference>
              <!-- 这个#reference差不多相当于@click -->
              <a href="javascript:;">退出登录</a>
            </template>
            </el-popconfirm>
          </li>
          <li><a href="javascript:;">我的订单</a></li>
          <li><a href="javascript:;">会员中心</a></li>
        </template>
        <template v-else>
          <li><a href="javascript:;" @click="$router.push('/login')">请先登录</a></li>
          <li><a href="javascript:;">帮助中心</a></li>
          <li><a href="javascript:;">关于我们</a></li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.app-topnav {
  background: #333;
  ul {
    display: flex;
    height: 53px;
    justify-content: flex-end;
    align-items: center;
    li {
      a {
        padding: 0 15px;
        color: #cdcdcd;
        line-height: 1;
        display: inline-block;

        i {
          font-size: 14px;
          margin-right: 2px;
        }

        &:hover {
          color: $xtxColor;
        }
      }

      ~li {
        a {
          border-left: 2px solid #666;
        }
      }
    }
  }
}
</style>
