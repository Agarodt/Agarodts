class LocalStorage {

   static fetchAll() {
    let contacts = [];
    let contactsIdArray = this.fetchContactsIdArray();
    contactsIdArray.forEach(id => contacts.push(this.fetchContact(id)));
    return contacts;
  }




  static fetchContact(id){
    return JSON.parse(localStorage.getItem('contact_'+id));
  }



  static fetchContactsIdArray(){
    let fetchedData = JSON.parse(localStorage.getItem('contacts'));

    if(!fetchedData){
      localStorage.setItem('contacts', "[]");
      return [];
    }

    return fetchedData;
  }


  static save(contact) {
    let contact_id = 'contact_' + contact.id;

    localStorage.setItem(contact_id, JSON.stringify(contact));
    this.updateContactsIndex(contact.id);
  }

  static removeContact(id){
    let contact_id = 'contact_'+ id;
    localStorage.removeItem(contact_id);
    this.removeContactIndex(id);
  }


  static updateContactsIndex(id) {
    let contacts = this.fetchContactsIdArray();
    if (contacts.indexOf(id) < 0) {
      contacts.push(id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  static removeContactIndex(id){
    let contacts = this.fetchContactsIdArray();
    let index = contacts.indexOf(id);

    if (index >= 0) {
      contacts.splice(index, 1);
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }
}

export default LocalStorage;
