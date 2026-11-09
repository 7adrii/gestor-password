class api {
    constructor(baseurl = 'http://localhost:3000') {
        this.baseurl = baseurl
    }

    // Get
    async getCategories() {
        const res = await fetch(`${this.baseurl}/categories`)
        return await res.json();
    }
}