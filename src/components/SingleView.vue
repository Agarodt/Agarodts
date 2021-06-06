<template>
    {{ contact.title }}
</template>
<script>
import LocalStorage from '@/classes/LocalStorage';
export default{
      data(){
		return{
            pageId: this.$route.params.id,contact:{}
        }},

     created(){
      this.contact = LocalStorage.fetchContact(this.pageId);
    },

    
    }

</script>
