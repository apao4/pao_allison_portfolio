(()=> {
    const vm = new Vue({
        el: '#app',
  
        data: {
            welcomemessage : "Howdy! Welcome to my video app!",
            
            videodata : [],
            singledata : [],
  
            videotitle : "",
            videodescription : "",
            videosource : "",
  
            showDetails : false
        },
  
        created : function(){
            //get all of the portfolio images on load
            this.fetchMovieData(loadReel);
        },
  
      //   created : function(){
      //     //get all of the portfolio images on load
      //     this.fetchReel(loadReel);
      // },
  
        methods : {
            login() {
                //stub
                console.log('login functionality');
            },
  
          fetchSingle(e) {
                //debugger;
                this.fetchMovieData(e.currentTarget.dataset.movie);
            },
      
          fetchReel(e) {
              //debugger;
              this.fetchMovieData(e.currentTarget.dataset.pro_category1 = 'reel');
          },
  
            loadReel(e) {
                //debugger;
                e.preventDefault(); //block a page reload (anchor tag default behaviour)
  
                dataKey = e.currentTarget.getAttribute('href');
                currentData = this.videodata.filter(tbl_portfolio => tbl_portfolio.pro_path === dataKey);
  
                this.videotitle = currentData[0].pro_name;
                this.videodescription = currentData[0].pro_desc;
                this.videosource = dataKey;
  
                this.showDetails = true;
  
                setTimeout(function(){ window.scrollTo(0, 1200)}, 500);
            },
  
            fetchMovieData(movie) {
                //this is a ternary statement (shorthand for if/else). left of the : is true, right is false
                let url = movie ? `./scripts/index.php?movie=${movie}` : './scripts/index.php';
  
                fetch(url) // pass in the one or many query
                .then(res => res.json())
                .then(data => {
                    console.log(data);
  
                    if (movie) {
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