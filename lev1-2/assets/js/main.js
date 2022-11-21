

fetch(`https://picsum.photos/v2/list`)
.then((response) => response.json())
.then((data) => {
    // console.log(data);
  
console.log(data);

    // console.log(data);
    data.forEach((person) => {
        const name = person.author;
        const bild = person.download_url;
        const id = person.id;

        const contactElement = document.createElement('figure');
        const contactElementBild = document.createElement('img');
        const contactElementName = document.createElement('figcaption');
        
        contactElementName.innerHTML = name;
        contactElementBild.setAttribute('src', bild);
        contactElement.appendChild(contactElementName);




        contactElement.appendChild(contactElementBild);

      
            // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
            //     .then((response) => response.json())
            //     .then((json) => console.log(json));
        document.body.appendChild(contactElement);
        });
 
     
    });
