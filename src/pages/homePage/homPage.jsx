import { NavLink } from 'react-router-dom';
// import HomeMe from '../../assets/img/me.jpg';
import HomeImg398 from '../../assets/img/srcset/home-page_scale,w_398.jpg';
// import HomeImg556 from '../../assets/img/srcset/home-page_scale,w_556.jpg';
// import HomeImg681 from '../../assets/img/srcset/home-page_scale,w_681.jpg';
// import HomeImg767 from '../../assets/img/srcset/home-page_scale,w_767.jpg';
// import HomeImg768 from '../../assets/img/srcset/home-page_scale,w_768.jpg';
import './homPage.scss';

export const HomePage = () => {
  return (
    <article className="home-page">
      <div className='content'>
        <h2>Валентина</h2>
        <p>дизайнер текстилю в інтер'єрі</p>
      </div>
      <NavLink exact to='/first_pet_project/gallery'>
        <span className='arrow-right'>

          <span>Перейти до моїх робот</span>
        </span>
        {/* <picture>
            <source srcSet={HomeImg556} media="(min-width: 732px)" max-width={556} max-height={741} />
            <img srcSet={HomeImg398} alt="???!!!!!!!!!!!!!!!!!!" width={320} height={531} />
          </picture> */}
        <img src={HomeImg398} alt="" />
      </NavLink>
    </article>
  )
}