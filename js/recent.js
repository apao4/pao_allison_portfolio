(()=> {
    const vm = new Vue({
        el: '#app',
  
        data: {
            
            videodata : [],
            singledata : [],
  
            videotitle : "",
            videodescription : "",
            videosource : "",
  
            showDetails : false,

            isHidden : true
        },
  
        created : function(){
            //get all of the portfolio images on load
            this.fetchRecentProject(null);
        },
  
      //   created : function(){
      //     //get all of the portfolio images on load
      //     this.fetchRecent(loadRecent);
      // },
  
        methods : {
            login() {
                //stub
                console.log('login functionality');
            },
  
          fetchSingle(e) {
                //debugger;
                this.fetchRecentProject(e.currentTarget.dataset.cent);
            },
      
          fetchRecentOne(e) {
              //debugger;
              this.fetchRecentProject(e.currentTarget.dataset.id = '1');
          },

          fetchRecentTwo(e) {
            //debugger;
            this.fetchRecentProject(e.currentTarget.dataset.id = '2');
        },
  
            loadRecent(e) {
                //debugger;
                e.preventDefault(); //block a page reload (anchor tag default behaviour)
  
                dataKey = e.currentTarget.getAttribute('href').split("/")[1];
                currentData = this.videodata.filter(tbl_recent => tbl_recent.rec_thumb === dataKey);
  
                this.videotitle = currentData[0].rec_title;
                this.videodescription = currentData[0].rec_desc;
                this.videosource = dataKey;
  
                this.showDetails = true;
  
            },

            closeLB() {
                this.showDetails = false;
            },
  
            fetchRecentProject(cent) {
                //this is a ternary statement (shorthand for if/else). left of the : is true, right is false
                let url = cent ? `./scripts/index.php?cent=${cent}` : './scripts/index.php';
  
                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    console.log(data);
  
                    if (cent) {
                        // getting one movie, so use the single array
                        this.videodata = data; //this is gonna go to the data
                    } else {
                        // push all the video (or portfolio content) into the video array
                        this.videodata = data;
                    }
                })
                .catch(function(error) {
                    console.log(error);
                });
            },
  
  
          
        }
    });
  })();