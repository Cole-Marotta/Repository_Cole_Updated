"use client";

import { useEffect, useState, ReactElement } from "react";

import { arcn5005Lectures } from "../../../arcn5005Lectures";
import { Lecture, Toc } from "../../../../types/types";
import { Header } from "../../../../components/Header";
import { Footer } from "../../../../components/Footer";


interface Props {
  params: { number: string };
}

export default function Page({ params }): ReactElement<Props> {
  let lecture: Lecture | undefined = arcn5005Lectures.find(
    (lecture) => lecture.id === params.number[0]
  );

  const [content, setContent] = useState<Toc>([]);
  const [currentSlideElement, setCurrentSlideElement] = useState<JSX.Element>();
  const [currentSlideNumber, setCurrentSlideNumber] = useState(0);

  const router = useRouter();


  useEffect(() => {
    if (lecture?.content) {
      if (!params.number[1]) router.push("1");
      else {
        const paramsNumber = Number(params.number[1]);

        const fullContent = [
          {
            element: (

            ),
          },
          ...lecture?.content,
        ];

        const index =
          paramsNumber < 1
            ? 1
            : paramsNumber > fullContent.length
            ? fullContent.length
            : paramsNumber;

        setCurrentSlideNumber(index);
        setContent(fullContent);
      }
    }
  }, [params.number[1], lecture]);

  useEffect(() => {
    if (content.length > 0) {
      const currentContent = content[currentSlideNumber - 1];

      setCurrentSlideElement(currentContent.element);
    }
  }, [content, currentSlideNumber]);

  return (

        <Footer list={content} currentPage={currentSlideNumber} />
      </nav>
    </main>
  );
}
