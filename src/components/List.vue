<template>
<p>Hello</p>
    
        <input v-model="newContact" placeholder='name'/>
         <button @click="createNew()">ok</button>
       

       
          <div >

            <contact-comp
               v-for="contact in contacts" 
              :key="contact.id"
              :id="contact.id"
              :title="contact.title"
              @delete="deleteContact($event)"
            ></contact-comp>
</div>
          
      
</template>
<script>
import ContactComp from './ContactComp.vue'
import LocalStorage from '@/classes/LocalStorage';
import { randomId } from '@/functions/randomId';
export default{
    data(){
        return{
        contacts: LocalStorage.fetchAll(),
        newContact: ''
    }},

    components:{
        ContactComp
    },
    
    watch:{
      contacts:{
        handler(contacts){
          contacts.forEach(contact => LocalStorage.save(contact))
        },
        deep: true
        }

    },

        methods:{
     
     createNew(){
        if(!this.newContact.length){
          return;
        }
        
        this.contacts.unshift({
          title: this.newContact,
          id: randomId(),
        });
        
      
        this.newContact = "";},

      deleteContact(id){
        let index = this.contacts.findIndex(contact=>(contact.id === id))
        this.contacts.splice(index,1); LocalStorage.removeContact(id)

      },

    }

	}
</script>


