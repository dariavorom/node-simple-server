module.exports = class Router {
    constructor() {
        this.endpoints = {
            '/users': {}
        }
    }

    request(method = 'GET', path, handler) {
        if (!this.endpoints[path]) {
            this.endpoints[path] = {};
        }

        const endpoint = this.endpoints[path];

        if (endpoint[method]) {
            throw new Error(`[${method}] уже существует`);
        }

        endpoint[method] = handler;

    };

    get(path, handller) {
        this.request('GET', path, handller)
    };

    post(path, handller) {
        this.request('POST', path, handller)
    };

    put(path, handller) {
        this.request('PUT', path, handller)
    };

    delete(path, handller) {
        this.request('DELETE', path, handller)
    };
}
