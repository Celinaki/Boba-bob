<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import ButtonComp from "../components/Button.vue"
import Underlinedtitle from '@/components/Underlinedtitle.vue';
import LinkText from '@/components/LinkText.vue';
import CustomBoba from "../assets/customboba.svg"
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <div class="one-box">
         <Underlinedtitle message="OUR CHOICE"/>
    <ButtonComp></ButtonComp>
    <LinkText message="SEE ALL BOBAS" linkText="/"/> 
    </div>
<div class="one-box f-c">
      <Underlinedtitle message="CREATE A CUSTOM BOBA"/>
<span class="custom-boba-holder">
  <img :src="CustomBoba" alt="" class="custom-boba-img">

</span>
<LinkText message="LET'S GO" linkText="/"/>

</div>
  </main>
</template>

<style scoped>
main{
  padding: 49px 1.5rem;
}
.one-box{
  padding-bottom: 40px;
}
.f-c{
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.custom-boba-holder{
  align-self: center;
  background-color: rgba(197, 127, 255, 0.411);
  border-radius: 50%;
  margin-top: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.custom-boba-img{
  height: 140px;
  width: 140px;
  /* align-self: center; */
 
  filter: drop-shadow(0 -6mm 9mm rgb(207, 196, 170));
}
</style>
