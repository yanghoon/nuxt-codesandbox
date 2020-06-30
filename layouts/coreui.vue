<template>
  <div class="c-app" :class="{ 'c-dark-theme': $store.state.darkMode }">
    <TheSidebar/>
    <TheAside/>
    <CWrapper>
      <TheHeader/>
      <div class="c-body">
        <main class="c-main">
          <CContainer fluid>
            <transition name="fade">
              <router-view></router-view>
            </transition>
          </CContainer>
        </main>
        <TheFooter/>
      </div>
    </CWrapper>
  </div>
</template>

<script>
import TheSidebar from "./core/TheSidebar";
import TheHeader from "./core/TheHeader";
import TheFooter from "./core/TheFooter";
import TheAside from "./core/TheAside";

export default {
  name: "TheContainer",
  components: {
    TheSidebar,
    TheHeader,
    TheFooter,
    TheAside
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
