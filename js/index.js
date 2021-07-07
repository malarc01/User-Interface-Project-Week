// JS goes here

class TabLink {
  constructor(zx) {
    // Assign this.element to the passed in DOM element
    this.element = zx;

    // Get the custom data attribute on the Link
    this.data = this.element.dataset.tab;
    // console.log(this.data)
    // Using the custom data attribute get the associated Item element
    this.itemElement = document.querySelector(`.tabs-item[data-tab="${this.data}"]`);

    // Using the Item element, create a new instance of the TabItem class
    this.tabItem = new TabItem(this.itemElement);

    // Add a click event listener on this instance, calling the select method on click
    // this.element.addEventListener('click', select )
    this.element.addEventListener('click', (c) => {this.select(c)} )

  };


  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');
    // console.log(links)
    // console.log(document.querySelectorAll('.tabs-link'))

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach(function  (){
      // removeClass('tabs-link-selected')
    // });
    // Array.from(links).forEach(  () => {removeClasses()});

    document.querySelectorAll('.tabs-link').forEach(  () => {removeClasses()});
    // Array.from(links).forEach(_removeClasses  (){
      // removeClass('tabs-link-selected')
    // });






    function removeClasses(){
      for (var i = 0; i < links.length; i++){
        links[i].classList.remove('tabs-link-selected')
      }
    }




    // Add a class named "tabs-link-selected" to this link
    // links.classList.add('tabs-link-selected')



    this.element.classList.add('tabs-link-selected');
      // console.log(this.element)
    // Call the select method on the item associated with this link
      this.tabItem.select()
  }
}

class TabItem {
  constructor(sg) {
    // Assign this.element to the passed in element
    this.element=sg;
    // console.log(this.element)
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');
    // console.log(items)
    // Remove the class "tabs-item-selected" from each element
    // document.querySelectorAll('.tabs-item').forEach(()=>{removeClasses()})
    // items.forEach(()=>{removeClasses()})
    Array.from(items).forEach(()=>{removeClasses()})
    //try using not arrow fucntions
    //try using the for loop method
    function removeClasses(){
      for (var i = 0; i < items.length; i++){
        items[i].classList.remove('tabs-item-selected')
      }
    }


    // Add a class named "tabs-item-selected" to this element
    // this.element.classList.add('tabs-item-selected')
    // document.querySelectorAll('.tabs-item').classList.add('tabs-item-selected')

    this.element.classList.add('tabs-item-selected');
  }
}

/* START HERE:

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');
// links.forEach( => new TabLink())
links.forEach((item) => new TabLink(item))

// console.log(links)
