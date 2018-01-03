// 定义页面路由
import movies from '../views/movie.vue'
import music from '../views/music.vue'
import book from '../views/book.vue'
import mine from '../views/mine.vue'

const routes = [
  { path: '/', redirect: '/movie' },
  { path: '/movie', component: movies },
  { path: '/music', component: music },
  { path: '/book', component: book },
  { path: '/mine', component: mine }
]

export default routes;