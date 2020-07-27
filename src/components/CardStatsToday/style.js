import styled from "styled-components";

export const CardStyled = styled.div`
  position: relative;
  padding: 1.5rem 2rem;
  background: var(--color-element);
  border-radius: var(--border-radius-default);
  overflow: hidden;
  cursor: pointer;
  transition: background 300ms ease;
  &:hover,
  &:active {
    background: var(--color-element-hover);
  }
`;

export const CardHeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .caption {
    color: var(--color-text-variation);
    font-weight: 700;
    font-size: 0.875rem;
  }
`;

export const CardBodyStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 1.5rem;
  .stat-number {
    color: var(--color-text);
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
  }
  .growth {
    &-caption {
      color: var(--color-text);
      font-size: 0.75rem;
      font-weight: 700;
    }
    &-indicator {
      width: 0.5rem;
      margin-right: 0.25rem;
    }
  }
  &.increase {
    .growth {
      &-indicator,
      &-caption {
        color: var(--color-lime-green);
      }
    }
  }
  &.decrease {
    .growth {
      &-indicator,
      &-caption {
        color: var(--color-bright-red);
      }
    }
  }
`;
