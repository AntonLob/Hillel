class RestApi{
    constructor(baseUrl){
        this._baseUrl = baseUrl;
    }

    static getQuery(obj){
        let result = ''
        for(key in obj){
           result += result ? '&' : '?' ;
           result += `${key}=${obj[key]}`
        }
        return result
    }
    getList(query = {}){
        return fetch(this._baseUrl + RestApi.getQuery(query)).then((res) => res.json())
    }
    getOne(id){
        return fetch(this._baseUrl + id).then((res) => res.json())
    }
    create(data){
        return fetch(this._baseUrl, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        })
        .then((res) => res.json())
    }
    update(data){
        return fetch(this._baseUrl + id, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-type': 'application/json'}
        })
        .then((res) => res.json())
    }
    delete(){
        return fetch(this._baseUrl + id, {
            method: 'DELETE',
        })
        .then((res) => res.json())
    }
}