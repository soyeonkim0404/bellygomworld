<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <button class="modal-default-button" @click="$emit('close')"></button>
          <div class="modal-inner">
            <div class="modal-header">
              <slot name="header"> </slot>
            </div>
            <div class="modal-body">
              <slot name="body"></slot>
            </div>
            <div class="modal-footer">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Modal",
  data() {
    return {};
  },
  methods: {},
};
</script>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0 auto;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-default-button {
  position: absolute;
  top: 60px;
  right: 60px;
  &::before {
    content: "";
    display: block;
    width: 50px;
    height: 50px;
    position: absolute;
    top: 50%;
    left: 50%;
    background: url("@/assets/images/ic_faq_close.svg") no-repeat center center /
      50px;
    transform: translate(-50%, -50%);
  }
}

.mobile {
  .modal-default-button {
    z-index: 10;
    top: 40px;
    right: 40px;
    &::before {
      width: 36px;
      height: 36px;
      background: url("@/assets/images/ic_faq_close.svg") no-repeat center
        center / 36px;
    }
  }
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
