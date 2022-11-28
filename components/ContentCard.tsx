import Image from "next/image";
import styled from "styled-components";

type ContentCardProps = {
  className?: string;
  title: string;
  author: string;
  imageSrc?: string;
};

const ContentCardContainer = styled.article``;

const ContentCardInfo = styled.section``;

const ContentCardTitle = styled.h3``;

const ContentCardAuthor = styled.p``;

export default function ContentCard({
  className,
  title,
  author,
  imageSrc,
}: ContentCardProps) {
  return (
    <ContentCardContainer className={className}>
      <Image
        src={imageSrc ? imageSrc : ""}
        alt={title}
        height={50}
        width={50}
      />
      <ContentCardInfo>
        <ContentCardTitle>{title}</ContentCardTitle>
        <ContentCardAuthor>{author}</ContentCardAuthor>
      </ContentCardInfo>
    </ContentCardContainer>
  );
}
