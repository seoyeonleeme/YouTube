class YoutubeFetch {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
    }
    async mostPopular() {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${this.key}`,
            this.getRequestOptions
        );
        const result = await response.json();
        return result.items;
    }

    async search(query) {
        const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyA_1HfUZXtXrNGAK7oPnEYJIHNu3Rw0IlA&part=snippet&maxResults=26&q=${query}&type=video&key=${this.key}`,
            this.getRequestOptions);
        const result = await response.json();
        return result.items.map(item => ({ ...item, id: item.id.videoId }));
    }
}

export default YoutubeFetch;  