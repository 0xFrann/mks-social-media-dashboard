import styled from "styled-components";

export const SwitchStyled = styled.label`
  position: relative;
  display: inline-block;
  width: 48px;
  height: 24px;
  margin: 0;

  & input {
    opacity: 0;
    width: 0;
    height: 0;
    &:checked + .slider {
      background: linear-gradient(45deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%);
      &:before {
        background: var(--color-background-variation);
        transform: translateX(24px);
      }
      &:hover {
        background: linear-gradient(45deg, hsl(230, 22%, 74%) 0%, hsl(230, 22%, 74%));
        &:before {
          background: var(--color-text);
        }
      }
    }

    &:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
    }
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, hsl(230, 22%, 74%) 0%, hsl(230, 22%, 74%));
    transition: all 300ms ease;

    &:hover {
      background: linear-gradient(45deg, hsl(210, 78%, 56%) 0%, hsl(146, 68%, 55%) 100%);
      &:before {
        background: var(--color-text);
      }
    }

    &:before {
      content: "";
      position: absolute;
      height: 16px;
      width: 16px;
      left: 4px;
      bottom: 4px;
      background: var(--color-element);
      transition: all 300ms ease;
    }

    &.round {
      border-radius: 12px;

      &:before {
        border-radius: 50%;
      }
    }
  }
`;

export const SwitchWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SwitchLabelStyled = styled.span`
  font-size: 0.875rem;
  font-weight: 700;
  color: var(--color-text);
  margin-right: 1rem;
`;
