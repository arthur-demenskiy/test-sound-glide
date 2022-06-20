class ApiService {

    BASE_URL = 'http://localhost:8080/';

    async getAllEmployes() {
      return await fetch(`${this.BASE_URL}employe`);
    }

    async startCall(phoneNumber) {
      return await fetch(`${this.BASE_URL}employe`, {
        method: 'POST',
        body: phoneNumber
      });
    }

    async generateToken() {
      return await fetch(`${this.BASE_URL}employe/token`, {
        method: 'POST'
      });
    }
}

const apiService = new ApiService();