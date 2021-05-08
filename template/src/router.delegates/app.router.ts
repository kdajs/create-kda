const AppRouter: RouterDelegate = (router, controllers, uploader) => {
  router.get('/', controllers.Hello)
}

export default AppRouter
