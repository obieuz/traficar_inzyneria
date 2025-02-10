async function get_regions(){
    const options = {
        method: 'GET',
        headers: {
            'User-Agent': 'insomnia/10.3.0',
            Authorization: await get_regions()
        }
    };

    fetch('http://localhost:3000/regions/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

async function get_cars(){
    const options = {
        method: 'GET',
        headers: {
            'User-Agent': 'insomnia/10.3.0',
            Authorization: await get_token()
        }
    };

    fetch('http://localhost:3000/cars/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

function get_auth_token(){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.2.0'},
        body: '{"login":"robzaj","password":"robzaj"}'
    };

    fetch('http://localhost:3000/users/token', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

}

async function get_token(){
    const options = {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'User-Agent': 'insomnia/9.2.0'},
        body: '{"login":"robzaj","password":"robzaj"}'
    };

    return await fetch('http://localhost:3000/users/token', options)
        .then(data=>data.json()).then(data=>data.token);
}

async function create_order()
{
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/10.3.0',
            Authorization: await get_token()
        },
        body: '{"carId":2,"begin_localization":{"begin_latitude":54,"begin_longitude":18}}'
    };

    fetch('http://localhost:3000/orders/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

async function finish_order(){
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/10.3.0',
            Authorization: await get_token()
        },
        body: '{"orderId":1,"end_localization":{"begin_latitude":55,"begin_longitude":18},"distance":9.6,"price_per_km":4.19}'
    };

    fetch('http://localhost:3000/orders/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

async function get_user_order(){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'User-Agent': 'insomnia/10.3.0',
            Authorization: await get_token()
        },
        body: 'false'
    };

    fetch('http://localhost:3000/orders/user/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

//ja to mam w insomnii do testowania, nie spradzalem po poxniej auth token musialbym zmieniac bo mam hard coded