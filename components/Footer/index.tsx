"use client";
import { useState, useEffect, ReactElement } from "react";
import { usePathname, useRouter } from "next/navigation";

import Stack from "@mui/material/Stack";

import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import BackIcon from "@mui/icons-material/ArrowBackIosRounded";
import ForwardIcon from "@mui/icons-material/ArrowForwardIosRounded";

import { Slides } from "../../types/types";


interface Props {
  list: [];
  currentPage: number;
}

export function Footer({ list, currentPage }): ReactElement<Props> {
  const router = useRouter();
  const path = usePathname();
  const [page, setPage] = useState(1);


  useEffect(() => {
    let newPath: string = path;
    if (Boolean(!Number(routerEnd) && routerEnd !== "0")) {
      newPath = path;
      router.replace(`${newPath}/${page}`);
    } else setNewPath(path.substring(0, path.lastIndexOf("/")));
  }, []);

  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);


  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      event.key === "ArrowRight" ||
        event.key === " " ||
        event.key === "ArrowLeft" ||
        event.key === "Backspace";

      if (event.key === "ArrowRight" || event.key === " ") {
        const nextPage = Math.min(page + 1, list.length);
        setPage(nextPage);
      } else if (event.key === "ArrowLeft" || event.key === "Backspace") {
        const prevPage = Math.max(page - 1, 1);
        setPage(prevPage);
      }
    }
    router.replace(`${newPath}/${page}`);

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [page]);

  function handlePaginationChange(e, value) {
    setPage(value);
  }

  return (

  );
}

interface SlideProps {
  slides: Slides;
}


  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      event.stopPropagation();

      event.key === "ArrowRight" ||
        event.key === " " ||
        event.key === "ArrowLeft" ||
        event.key === "Backspace";

      window.focus();
      if (event.key === "ArrowRight" || event.key === " ") {
        const nextPage = Math.min(page + 1, slides.length);
        router.replace(slides[nextPage - 1].url);
      } else if (event.key === "ArrowLeft" || event.key === "Backspace") {
        const prevPage = Math.max(page - 1, 1);
        router.replace(slides[prevPage - 1].url);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [page, slides, router]);

  function handlePaginationChange(e, value) {
    const pageIndex = value;
    setPage(pageIndex);
    router.replace(slides[pageIndex - 1].url);
  }

  return (

  );
}

// export function MiddlewareFooter() {
//   const [page, setPage] = useState(1);

//   useEffect(() => {
//     slidesDispatch({
//       type: "SET_SLIDE_NUMBER",
//       payload: { currentSlideNumber: page },
//     });
//   }, [page]);

//   const slidesDispatch = useContext(SlidesContext)["dispatch"];
//   const { totalSlides, slides, currentSlideNumber } =
//     useContext(SlidesContext)["state"]["slides"];

//   useEffect(() => {
//     function handleKeyDown(event: KeyboardEvent) {
//       event.key === "ArrowRight" ||
//         event.key === " " ||
//         event.key === "ArrowLeft" ||
//         event.key === "Backspace";

//       if (event.key === "ArrowRight" || event.key === " ") {
//         const nextPage = Math.min(page + 1, totalSlides);
//         setPage(nextPage);
//       } else if (event.key === "ArrowLeft" || event.key === "Backspace") {
//         const prevPage = Math.max(page - 1, 1);
//         setPage(prevPage);
//       }
//     }

//     window.addEventListener("keydown", handleKeyDown);

//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, [page]);

//   function handlePaginationChange(e, value) {
//     setPage(value);
//   }

//   return (
//     <Stack spacing={2} visibility={totalSlides > 1 ? "visible" : "hidden"}>
//       <Pagination
//         className=" w-screen flex justify-center"
//         count={totalSlides}
//         size="large"
//         page={page}
//         onChange={handlePaginationChange}
//         renderItem={(item) => (
//           <PaginationItem
//             slots={{ previous: BackIcon, next: ForwardIcon }}
//             {...item}
//           />
//         )}
//       />
//     </Stack>
//   );
// }
