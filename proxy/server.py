import json

import requests
from flask import Flask, request, Response

app = Flask(__name__)

express_api_url = "http://localhost:3000"


@app.route("/", defaults={"path": ""}, methods=["GET", "POST", "PATCH", "DELETE"])
@app.route("/<path:path>", methods=["GET", "POST", "PATCH", "DELETE"])
def proxy(path):
    url = f"{express_api_url}/{path}"

    response = requests.request(
        method=request.method,
        url=url,
        headers=dict(request.headers),
        data=request.get_data(),
        params=request.args,
        stream=True,
    )

    # mocked = [
    #     {'name': 'Randy', 'email': 'randy@gmail.com', 'phone': '02592399532'},
    #     {'name': 'Quang', 'email': 'quang@gmail.com', 'phone': '04856234678'}
    # ]

    return Response(
        response.content,
        status=response.status_code,
        content_type='application/json',
    )


if __name__ == "__main__":
    app.run(port=5000)
