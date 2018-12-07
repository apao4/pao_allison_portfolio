(()=> {
    const vm = new Vue({
        el: '#app',

        data: {
            welcomemessage : "Howdy! Welcome to my video app!",
            
            portdata : [],
            singledata : [],

            porttitle : "",
            portdescription : "",
            portsource : "",

            showDetails : false
        },

        created : function(){
            //get all of the movie data on page load
            this.fetchPortfolioData('port');
        },

        methods : {
            login() {
                //stub
                console.log('login functionality');
            },

            fetchSingle(e) {
                //debugger;
                this.fetchPortfolioData(e.currentTarget.dataset.port);
            },

            fetchAnimation(e) {
                //debugger;
                this.fetchPortfolioData(e.currentTarget.dataset.pro_category1 = 'animation');
            },

            fetchWeb(e) {
                //debugger;
                this.fetchPortfolioData(e.currentTarget.dataset.pro_category1 = 'web');
            },

            fetchGraphic(e) {
                //debugger;
                this.fetchPortfolioData(e.currentTarget.dataset.pro_category1 = 'graphic');
            },

            fetchPhoto(e) {
                //debugger;
                this.fetchPortfolioData(e.currentTarget.dataset.pro_category1 = 'photo');
            },

            fetchVideo(e) {
                //debugger;
                this.fetchPortfolioData(e.currentTarget.dataset.pro_category1 = 'video');
            },

            fetchBranding(e) {
                //debugger;
                this.fetchPortfolioData(e.currentTarget.dataset.pro_category1 = 'branding');
            },

            loadPort(e) {
                //debugger;
                e.preventDefault(); //block a page reload (anchor tag default behaviour)

                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.portdata.filter(tbl_portfolio => tbl_portfolio.pro_path === dataKey);

                this.porttitle = currentData[0].pro_name;
                this.portdescription = currentData[0].pro_desc;
                this.portsource = dataKey;

                this.showDetails = true;

                // setTimeout(function(){ window.scrollTo(0, 1200)}, 500);
            },

            fetchPortfolioData(port) {
                //this is a ternary statement (shorthand for if/else). left of the : is true, right is false
                let url = port ? `./scripts/index.php?port=${port}` : './scripts/index.php';

                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    console.log(data);

                    if (port) {
                        // getting one movie, so use the single array
                        this.portdata = data; //this is gonna go to the data
                    } else {
                        // push all the video (or portfolio content) into the video array
                        this.portdata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            }
        }
    });
})();