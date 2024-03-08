export default class App {
  constructor() {
    this._onClick = this._onClick.bind(this);

    let button = document.querySelector("#button");
    button.addEventListener("click", this._onClick);
  }

  _onClick(event) {
    console.log("clicked !!!");
    let p = fetch("myfile.txt");//return a promise + response
    p.then((response) => {
      let p2 = response.text();//return a promise + text data
      p2.then((text) =>{
        let p3 = fetch("person.json");//return a promise + response
        p3.then((response) => {
          let p4 = response.json();//return promise with json data
          p4.then((obj) =>{
            document.querySelector("#results").textContent = 
            `${text}\n${obj.givenName} ${obj.surname}`;
          });
        });

        
      });
    });
  }
}
