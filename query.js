const params = {
    search: 'Вася',
    take: 10,
};

function query(object) {
    return new URLSearchParams(object).toString();
}

console.log(query(params));

//`search=${search}&take=${take}`