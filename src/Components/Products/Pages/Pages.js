import { PageButton, PageContainer } from "./Pages-styled";

export const Pages = (props) => {
  return (
    <PageContainer>
      <PageButton
        onClick={() => {
          props.setCurrentPage(Number(props.currentPage - 1));
        }}
      >{`<`}</PageButton>
      {Array.from(Array(props.pages), (item, index) => {
        return (
          <PageButton
            value={index}
            onClick={(e) => props.setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </PageButton>
        );
      })}
      <PageButton
        onClick={() => {
          props.setCurrentPage(Number(props.currentPage + 1));
        }}
      >{`>`}</PageButton>
    </PageContainer>
  );
};
