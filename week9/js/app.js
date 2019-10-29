var app = new Vue({
    el: "#app",
    mounted: function () {
        axios.get('data/movies.json')
            .then((response) => {
                this.movie = response.data.movies;
            });
    },
    data: {
        movie: [ ]
    },
    methods: {

    }
})