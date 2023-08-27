<template>
  <div class="social">
    <a href="https://vk.com/cheer_young" class="social-link" target="_blank">
      <img src="../assets/svg/vk.svg" alt="vk" />
    </a>
    <a href="https://wa.me/79111554726" class="social-link" target="_blank">
      <img src="../assets/svg/wa.svg" alt="WhatsApp" />
    </a>
    <a href="tg://resolve?domain=record_cheer" class="social-link">
      <img src="../assets/svg/tg.svg" alt="Telegram" />
    </a>
  </div>
</template>

<style scoped lang="scss">
.social {
  display: flex;
  gap: 16px;
}

.social-link {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: $accent;
  width: 40px;
  height: 40px;
  transition: all 0.2s;
  &:hover {
    transform: scale(110%);
    box-shadow: 0 2px 5px 2px rgba(0, 0, 0, 0.488);
  }
}
</style>
