function Increment(request) {
    const { method, params, queryParams } = request;
    const data = {
        GET: queryParams,
        POST: params
    };
    return [200, {}, data[method]];
}

export default Increment;
