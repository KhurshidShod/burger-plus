// import styles from "./Categories.module.scss";
// import { BsFire } from "react-icons/bs";
// import {
//   GiFullPizza,
//   GiSushis,
//   GiWrappedSweet,
//   GiDrinkMe,
// } from "react-icons/gi";
// import { BiSolidDrink } from "react-icons/bi";
// import { useTranslation } from "react-i18next";
// import { IoFastFood } from "react-icons/io5";
// import { FaBowlFood } from "react-icons/fa6";
// import { useEffect, useState } from "react";
// import { Link } from "react-scroll";

// const Categories = () => {
//   const [catFixed, setCatFixed] = useState(false);
//   const { t, i18n } = useTranslation();
//   useEffect(() => {
//     window.addEventListener("scroll", () => {
//       if (window.pageYOffset > 115) {
//         setCatFixed(true);
//       } else {
//         setCatFixed(false);
//       }
//     });
//   });
//   return (
//     <div className={styles.categories}>
//       <div className="container">
//         <section
//           className={`${styles.categories__wrapper}  ${
//             catFixed ? styles.fixed : null
//           }`}
//         >
//           <div className={`${styles.categories__wrapper_inner}`}>
//             <Link
//               activeClass="activeCat"
//               to="aksiya"
//               spy={true}
//               smooth={true}
//               offset={-100}
//               duration={500}
//               className={styles.category}
//             >
//               <BsFire size={30} />
//               <p>{t("Aksiya")}</p>
//             </Link>
//             <Link
//               activeClass="activeCat"
//               to="Пицца"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               className={styles.category}
//             >
//               <GiFullPizza size={30} />
//               <p>{t("Pitsa")}</p>
//             </Link>
//             <Link
//               activeClass="activeCat"
//               to="Комбо"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               className={styles.category}
//             >
//               <IoFastFood size={30} />
//               <p>{t("Kombo")}</p>
//             </Link>
//             <Link
//               activeClass="activeCat"
//               to="Суши"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               className={styles.category}
//             >
//               <GiSushis size={30} />
//               <p>{t("Sushi")}</p>
//             </Link>
//             <Link
//               activeClass="activeCat"
//               to="Соусы"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               className={styles.category}
//             >
//               <GiDrinkMe size={30} />
//               <p>{t("Sous")}</p>
//             </Link>
//             <Link
//               activeClass="activeCat"
//               to="Десерты"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               className={styles.category}
//             >
//               <GiWrappedSweet size={30} />
//               <p>{t("Desert")}</p>
//             </Link>
//             <Link
//               activeClass="activeCat"
//               to="Напитки"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               className={styles.category}
//             >
//               <BiSolidDrink size={30} />
//               <p>{t("Napitka")}</p>
//             </Link>
//             <Link
//               activeClass="activeCat"
//               to="Закуски"
//               spy={true}
//               smooth={true}
//               offset={-150}
//               duration={500}
//               className={styles.category}
//             >
//               <FaBowlFood size={30} />
//               <p>{t("Snek")}</p>
//             </Link>
//           </div>
//         </section>
//       </div>
//     </div>
//   );
// };

// export default Categories;
import styles from "./Categories.module.scss";
import { BsFire } from "react-icons/bs";
import {
  GiFullPizza,
  GiSushis,
  GiWrappedSweet,
  GiDrinkMe,
} from "react-icons/gi";
import { BiSolidDrink } from "react-icons/bi";
import { IoFastFood } from "react-icons/io5";
import { FaBowlFood } from "react-icons/fa6";
import { useTranslation } from "react-i18next";
import { useEffect, useState, useRef } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const categoryData = [
  { name: "aksiya", icon: <BsFire size={30} />, label: "Aksiya" },
  { name: "Пицца", icon: <GiFullPizza size={30} />, label: "Pitsa" },
  { name: "Комбо", icon: <IoFastFood size={30} />, label: "Kombo" },
  { name: "Суши", icon: <GiSushis size={30} />, label: "Sushi" },
  { name: "Соусы", icon: <GiDrinkMe size={30} />, label: "Sous" },
  { name: "Десерты", icon: <GiWrappedSweet size={30} />, label: "Desert" },
  { name: "Напитки", icon: <BiSolidDrink size={30} />, label: "Napitka" },
  { name: "Закуски", icon: <FaBowlFood size={30} />, label: "Snek" },
];

const Categories = () => {
  const { t } = useTranslation();
  const [catFixed, setCatFixed] = useState(false);
  const [activeCat, setActiveCat] = useState("aksiya");
  const wrapperRef = useRef(null);
  const linkRefs = useRef({});

  // Scroll event for fixed top
  useEffect(() => {
    const handleScroll = () => {
      setCatFixed(window.pageYOffset > 115);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-scroll categories wrapper to active category
  useEffect(() => {
    const el = linkRefs.current[activeCat];
    if (el && wrapperRef.current) {
      const wrapper = wrapperRef.current;
      const elLeft = el.offsetLeft;
      const elWidth = el.offsetWidth;
      const wrapperWidth = wrapper.offsetWidth;

      const scrollLeft = elLeft - wrapperWidth / 2 + elWidth / 2;

      wrapper.scrollTo({
        left: scrollLeft,
        behavior: "smooth",
      });
    }
  }, [activeCat]);

  return (
    <div className={styles.categories}>
      <div className="container">
        <section
          className={`${styles.categories__wrapper} ${catFixed ? styles.fixed : ""}`}
        >
          <div
            className={styles.categories__wrapper_inner}
            ref={wrapperRef}
            style={{ display: "flex", overflowX: "auto", scrollbarWidth: "none" }}
          >
            {categoryData.map((cat) => (
              <Link
                key={cat.name}
                to={cat.name}
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
                className={`${styles.category} ${
                  activeCat === cat.name ? "activeCat" : ""
                }`}
                ref={(el) => (linkRefs.current[cat.name] = el)}
                onSetActive={() => setActiveCat(cat.name)}
              >
                {cat.icon}
                <p>{t(cat.label)}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Categories;

