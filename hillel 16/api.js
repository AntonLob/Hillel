class Api{
    constructor(baseurl){
        this._baseURL = baseurl;
    }
    create(data){
      return  fetch(this._baseURL,{
        method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
      }).then((res) => res.json());
    };
    read(){
        return  fetch(this._baseURL).then((res) => res.json());
    };
    update(data,id){
        return  fetch(this._baseURL + id ,{
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {'Content-Type': 'application/json'}
          }).then((res) => res.json());
    };
    delete(data){
        return  fetch(this._baseURL + data.id ,{
            method: 'DELETE'
          }).then((res) => res.json());
    };
}