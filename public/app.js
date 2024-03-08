export default class App {
  constructor() {
    this._onClickBetter = this._onClickBetter.bind(this);

    let button = document.querySelector("#button");
    button.addEventListener("click", this._onClickBetter);
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

  async _onClickBetter(event){
    //await
    let response = await fetch("myfile.txt");//return a promise + response
    let text = await response.text();//return promise + text data
    

    let response2 = await fetch("person.json");
    let obj = await response2.json();
    document.querySelector("#results").textContent = 
    `${text}\n${obj.givenName} ${obj.surname}`;

  }
}
