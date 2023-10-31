import requests

proxy_url = 'http://127.0.0.1:5000'


class ExternalUser:
    def __init__(self, name, email, phone):
        self.name = name
        self.email = email
        self.phone = phone

    @classmethod
    def fetch(cls):
        response = requests.get(f'{proxy_url}/api/users')
        if response.status_code == 200:
            user_list = response.json()
            return [
                cls(user_data['name'], user_data['email'], user_data['phone'])
                for user_data in user_list
            ]
        return []
