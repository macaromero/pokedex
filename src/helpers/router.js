import router from "../Router";

const redirect = (url) =>  {
	router.push(url)
}

const checkRoute = (query) => {
	if (query) return router.currentRoute.value.query.search || ''
	return router.currentRoute.value.path
}


export { redirect, checkRoute }