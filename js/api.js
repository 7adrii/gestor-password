class api {
    constructor(baseurl = 'http://localhost:3000') {
        this.baseurl = baseurl
    }

    // Get
    async getCategories() {
        const res = await fetch(`${this.baseurl}/categories`)
        return await res.json()
    }

    // Post
    async createCategory(categoryData) {
        const res = await fetch(`${this.baseurl}/categories`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(categoryData)
        })
        return await res.json()
    }
}