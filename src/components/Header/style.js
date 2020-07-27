import styled from "styled-components";

export const HeaderStyled = styled.div`
  padding: 2rem 0;
  .title {
    font-size: 1.75rem;
    line-height: 1;
  }
  .subtitle {
    color: var(--color-text-variation);
    font-size: 0.875rem;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 14rem;
    background: var(--color-background-variation);
    border-radius: 0 0 var(--border-radius-large) var(--border-radius-large);
  }
`;
