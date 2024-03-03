import { createRouter, createWebHistory } from 'vue-router';
import userRoute from '../constants/routes/user'
import Layouts from '../constants/layouts';
import { layoutMiddleware } from './middlewares/index';

const routes = [

  {
    path: '/',
    name: userRoute.RT_ABOUT,
    component: () => import('../views/About.vue'),
    meta: {
      layout:Layouts.USER,
      title: userRoute.MT_ABOUT
    }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});


router.beforeResolve(async (to) => {
  await layoutMiddleware(to);
  updateMeta(to?.meta?.title);
});

function updateMeta(title) {
  document.title = title;
}


export { updateMeta };
export default router;
