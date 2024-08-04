// import FirstNav from '@/app/components/firstNav/FirstNav'
import Index from '../app/pages/index/page'
import BookSlider from './components/bookSlider/BookSlider';
import Coursel from './components/coursel/Coursel';
import FeatherThisWeek from './components/homePageComponents/FeatherThisWeek';
import JoinNewslatter from './components/homePageComponents/JoinNewslatter';
import ListedPublishItems from './components/homePageComponents/ListedPublishItems';
import GetInTouch from './components/contactPageComponent/GetInTouch';
import catagories from './pages/catagories/page';
import blog from './pages/blog/page';
import Blog from './components/blogPageComonent/Blog';
import { redirect } from 'next/navigation';


export default function Home() {
  redirect('/pages/index');
  return null;
  return (
     <div>
      {/* <BookSlider  /> */}
      {/* <FeatherThisWeek/> */}
      {/* <ListedPublishItems/> */}
      {/* <JoinNewslatter/> */}
      {/* <catagories/> */}
      {/* <GetInTouch/> */}
      {/* <Blog/> */}
     
</div>
  );
}
