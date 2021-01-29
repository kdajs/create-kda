const Test: RouterDelegate = (router, controllers) => {
  router.get('/', controllers.Hello)
}

export default Test
