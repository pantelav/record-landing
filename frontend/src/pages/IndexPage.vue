<template>
  <main>
    <MainSection />
    <AboutSection />
    <MotivationSection />
    <FirstClass />
    <GroupsSection />
    <ContactsSection />
  </main>
</template>

<script setup lang="ts">
import MainSection from 'src/components/sections/MainSection.vue';
import MotivationSection from 'src/components/sections/MotivationSection.vue';
import FirstClass from '../components/sections/FirstClass.vue';
import AboutSection from 'src/components/sections/AboutSection.vue';
import GroupsSection from 'src/components/sections/GroupsSection.vue';
import ContactsSection from 'src/components/sections/ContactsSection.vue';
</script>

<style scoped></style>
