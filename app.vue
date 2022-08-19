<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <NuxtLayout>
      <NuxtPage />
      <template #footer="footertProps"> {{footertProps}} App Footer </template>
    </NuxtLayout>
  </div>
</template>
