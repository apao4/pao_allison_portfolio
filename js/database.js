(() => {
        const info = document.querySelectorAll('.service');
        
        function getData(){
                console.log(this);
                let targetURL = `scripts/connect.php?id=${this.id}`; //whenever we click on a thumbnail, pass its id to the php query
                fetch (targetURL) // go get the data and bring it back! good doggy
                .then(res => res.json()) //turn the result into a plain JS object
                .then(data => {
                    console.log(data);
                    //run a function to parse our data
                    showService(data[0]);
                }) //lets see what we got
                .catch(function(error) {
                    console.log(error); //if anything broke, log it to the console
                });
    
                function showService(data) {
                    //debugger;
                    //parse the DB info and put it where it needs to go
                    const { service, description } = data; //destructuring assignment => MDN JS destructuring
                    //grab the elements we need, and populate them with data
                    document.querySelector('.service1').textContent = service;
                    document.querySelector('.description1').textContent = description;
                }
            };
    
           info.forEach(info => info.addEventListener("click", getData));
        
            //getData(); //trigger the getData function
    
        })();