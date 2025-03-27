import styles from "./header.module.scss";
import { Link } from "react-router";

function Header(props) {
  return (
    <header className={styles.header}>
      <div className={styles.header_container}>
        <Link to="/">
          <div className={styles.header_logo_container}>
            <div className={styles.header_logo}>
              <svg
                width="154"
                height="16"
                viewBox="0 0 154 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35.4491 15.4184V0.488708H41.181C42.3453 0.488708 43.2822 0.636794 43.9918 0.939695C44.6945 1.2426 45.2457 1.70704 45.6452 2.33304C46.0448 2.95903 46.2446 3.61868 46.2446 4.30526C46.2446 4.94472 46.0655 5.54379 45.7141 6.1092C45.3628 6.67462 44.8254 7.1256 44.1089 7.47562C45.0321 7.73814 45.7417 8.18912 46.2377 8.82858C46.7338 9.46804 46.9818 10.2219 46.9818 11.0902C46.9818 11.7903 46.8302 12.4365 46.5271 13.0423C46.2239 13.6481 45.8519 14.1058 45.4041 14.4289C44.9563 14.752 44.4052 15.001 43.73 15.1693C43.0618 15.3376 42.235 15.4184 41.2637 15.4184H35.4491ZM37.4677 6.76212H40.7676C41.6632 6.76212 42.3039 6.70154 42.6966 6.58711C43.2133 6.43903 43.5991 6.18998 43.8609 5.84669C44.1227 5.5034 44.2536 5.06588 44.2536 4.54085C44.2536 4.04275 44.1296 3.61195 43.8885 3.23501C43.6473 2.85807 43.296 2.60228 42.8482 2.46093C42.3935 2.31958 41.6219 2.25226 40.5265 2.25226H37.4745V6.76212H37.4677ZM37.4677 13.6548H41.2705C41.925 13.6548 42.3797 13.6279 42.6484 13.5808C43.1169 13.5 43.5027 13.3654 43.8127 13.1769C44.1227 12.9884 44.3845 12.7124 44.5843 12.349C44.7841 11.9855 44.8874 11.5682 44.8874 11.0902C44.8874 10.5316 44.7427 10.0469 44.4465 9.63632C44.1572 9.22572 43.7507 8.93628 43.234 8.768C42.7173 8.59972 41.9733 8.51895 41.0019 8.51895H37.4677V13.6548Z"
                  fill="#263238"
                />
                <path
                  d="M50.02 15.4184V0.488708H61.0635V2.25226H52.0454V6.8227H60.4986V8.5728H52.0454V13.6548H61.4217V15.4184H50.02Z"
                  fill="#263238"
                />
                <path
                  d="M65.5415 0.488708H75.1038V15.4116H73.0853V2.25226H67.56V9.93922C67.56 11.5008 67.4843 12.6451 67.3327 13.3721C67.1811 14.0991 66.8711 14.6645 66.3889 15.0683C65.9066 15.4722 65.3004 15.6741 64.5632 15.6741C64.1154 15.6741 63.5849 15.5934 62.958 15.4318L63.3025 13.6817C63.6332 13.8163 63.9225 13.8837 64.1567 13.8837C64.6183 13.8837 64.9559 13.7154 65.1901 13.3788C65.4175 13.0423 65.5346 12.248 65.5346 11.0027V0.488708H65.5415Z"
                  fill="#263238"
                />
                <path
                  d="M78.0318 8.14875C78.0318 5.6717 78.7138 3.73313 80.071 2.33305C81.4351 0.932979 83.1919 0.232941 85.3413 0.232941C86.7536 0.232941 88.0213 0.562766 89.158 1.22242C90.2878 1.88207 91.1559 2.7975 91.7484 3.97545C92.3409 5.1534 92.6371 6.48616 92.6371 7.98047C92.6371 9.49498 92.3271 10.8479 91.7001 12.0393C91.0732 13.2308 90.1914 14.1395 89.0409 14.752C87.8973 15.3645 86.6572 15.6742 85.3344 15.6742C83.8946 15.6742 82.6132 15.3376 81.4764 14.6578C80.3466 13.9779 79.4854 13.0557 78.8999 11.8778C78.3212 10.6999 78.0318 9.46132 78.0318 8.14875ZM80.1124 8.17568C80.1124 9.97289 80.6084 11.3932 81.6005 12.423C82.5925 13.4596 83.8326 13.9779 85.3276 13.9779C86.8501 13.9779 88.1039 13.4529 89.0822 12.4096C90.0674 11.3662 90.5565 9.87865 90.5565 7.96028C90.5565 6.74868 90.343 5.68516 89.9227 4.77645C89.5025 3.86775 88.8893 3.16771 88.0764 2.66961C87.2703 2.17151 86.361 1.92245 85.3482 1.92245C83.9153 1.92245 82.689 2.40036 81.6556 3.36292C80.6291 4.32547 80.1124 5.93421 80.1124 8.17568Z"
                  fill="#263238"
                />
                <path
                  d="M94.7728 10.6191L96.6811 10.4575C96.7707 11.2047 96.9842 11.8172 97.3149 12.2951C97.6456 12.773 98.1554 13.1634 98.8512 13.4529C99.547 13.7491 100.326 13.8971 101.194 13.8971C101.965 13.8971 102.647 13.7827 103.233 13.5606C103.825 13.3385 104.259 13.0288 104.549 12.6384C104.838 12.248 104.983 11.824 104.983 11.3595C104.983 10.8883 104.845 10.4845 104.569 10.1344C104.294 9.78442 103.832 9.48825 103.191 9.25266C102.778 9.09784 101.876 8.85552 100.47 8.52569C99.0648 8.19587 98.0865 7.88624 97.5216 7.5968C96.7913 7.22659 96.2471 6.76214 95.8888 6.21019C95.5306 5.65823 95.3515 5.03897 95.3515 4.35239C95.3515 3.59851 95.5719 2.89174 96.006 2.23882C96.4469 1.5859 97.0807 1.08779 97.9212 0.744507C98.7617 0.40795 99.6986 0.232941 100.725 0.232941C101.855 0.232941 102.854 0.40795 103.722 0.7647C104.59 1.12145 105.251 1.64648 105.72 2.33978C106.188 3.03309 106.436 3.8139 106.471 4.68895L104.535 4.8303C104.432 3.88794 104.08 3.17444 103.474 2.6898C102.875 2.20516 101.986 1.96957 100.815 1.96957C99.5953 1.96957 98.6997 2.1917 98.1416 2.62922C97.5836 3.06675 97.3011 3.59178 97.3011 4.21104C97.3011 4.74953 97.5009 5.18705 97.8936 5.53707C98.2794 5.88036 99.299 6.23711 100.939 6.60059C102.578 6.96407 103.708 7.28044 104.321 7.54968C105.21 7.95355 105.865 8.45838 106.292 9.07092C106.712 9.68345 106.925 10.3902 106.925 11.1912C106.925 11.9855 106.691 12.7327 106.23 13.4394C105.761 14.1395 105.093 14.6914 104.225 15.0818C103.35 15.4722 102.372 15.6674 101.283 15.6674C99.8984 15.6674 98.741 15.4722 97.8109 15.0751C96.874 14.6847 96.1437 14.0923 95.6133 13.2981C95.0759 12.5173 94.8003 11.622 94.7728 10.6191Z"
                  fill="#263238"
                />
                <path
                  d="M109.971 15.4184V0.488708H111.989V6.62077H119.932V0.488708H121.951V15.4116H119.932V8.38433H111.989V15.4184H109.971Z"
                  fill="#263238"
                />
                <path
                  d="M124.913 8.14875C124.913 5.6717 125.595 3.73313 126.953 2.33305C128.317 0.932979 130.073 0.232941 132.223 0.232941C133.635 0.232941 134.903 0.562766 136.04 1.22242C137.169 1.88207 138.037 2.7975 138.63 3.97545C139.222 5.1534 139.519 6.48616 139.519 7.98047C139.519 9.49498 139.209 10.8479 138.582 12.0393C137.955 13.2308 137.073 14.1395 135.922 14.752C134.779 15.3645 133.539 15.6742 132.216 15.6742C130.776 15.6742 129.495 15.3376 128.358 14.6578C127.228 13.9779 126.367 13.0557 125.781 11.8778C125.21 10.6999 124.913 9.46132 124.913 8.14875ZM127.001 8.17568C127.001 9.97289 127.497 11.3932 128.489 12.423C129.481 13.4596 130.721 13.9779 132.216 13.9779C133.739 13.9779 134.992 13.4529 135.971 12.4096C136.956 11.3662 137.445 9.87865 137.445 7.96028C137.445 6.74868 137.231 5.68516 136.811 4.77645C136.391 3.86775 135.778 3.16771 134.965 2.66961C134.159 2.17151 133.249 1.92245 132.237 1.92245C130.804 1.92245 129.577 2.40036 128.544 3.36292C127.518 4.32547 127.001 5.93421 127.001 8.17568Z"
                  fill="#263238"
                />
                <path
                  d="M142.343 15.4184V0.488708H148.103C149.116 0.488708 149.894 0.535827 150.424 0.630063C151.175 0.751223 151.802 0.986812 152.312 1.3301C152.822 1.67339 153.228 2.1513 153.538 2.77056C153.848 3.38983 154 4.06967 154 4.80336C154 6.07555 153.587 7.1458 152.76 8.02758C151.933 8.90935 150.438 9.34688 148.282 9.34688H144.362V15.4116H142.343V15.4184ZM144.362 7.59005H148.309C149.618 7.59005 150.542 7.35446 151.093 6.87655C151.644 6.39864 151.913 5.73226 151.913 4.87068C151.913 4.24468 151.754 3.71292 151.43 3.26867C151.107 2.82441 150.679 2.52824 150.156 2.38689C149.818 2.29938 149.184 2.25226 148.268 2.25226H144.362V7.59005Z"
                  fill="#263238"
                />
                <rect
                  x="18"
                  y="1.27945"
                  width="13"
                  height="13"
                  rx="6.5"
                  stroke="#263238"
                  strokeWidth="2"
                />
                <rect
                  x="1"
                  y="1.27945"
                  width="13"
                  height="13"
                  rx="6.5"
                  stroke="#263238"
                  strokeWidth="2"
                />
              </svg>
            </div>
          </div>
        </Link>
        <nav className={styles.headerMenu}>
          <ul className={styles.headerMenu_list}>
            <li className={styles.headerMenu_item}>
              <Link to="/Catalog">
                <p className={styles.headerMenu_link}>Каталог</p>
              </Link>
            </li>
            <li className={styles.headerMenu_item} onClick={props.onClickBag}>
              <p className={styles.headerMenu_link}>Корзина</p>
            </li>
            <li className={styles.headerMenu_item}>
              <Link>
                <p className={styles.headerMenu_link}>Заказать</p>
              </Link>
            </li>
            <li className={styles.headerMenu_item}>
              <Link>
                <p className={styles.headerMenu_link}>Контакты</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
