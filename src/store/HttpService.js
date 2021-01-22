import axios from "axios";

export class HttpService {
    constructor(root) {
        this.root = root
        this.$http = axios;
    }
    Get(path, config = null) {
        const url = this.root + path
        return this.$http.get(url, config);
    }
    Post(path, data = null, config = null) {
        const url = this.root + path
        return this.$http.post(url, data, config);
    }
    Delete(path, data = null, header = null) {
        const url = this.root + path
        return this.$http.delete(url, {
            data: data,
            headers: header
        });
    }
    Put(path, data = null, config = null) {
        const url = this.root + path
        return this.$http.put(url, data, config);
    }
}