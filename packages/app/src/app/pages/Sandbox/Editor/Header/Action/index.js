import React from 'react';
import Tooltip from 'common/lib/components/Tooltip';
import MoreInfoIcon from 'react-icons/lib/md/arrow-drop-down';

import { Title, Action, ActionLink, ActionA, IconContainer } from './elements';

function ActionComponent({
  onClick,
  href,
  Icon,
  content,
  tooltip,
  highlight,
  placeholder,
  moreInfo,
  unresponsive,
  a,
  blink,
  iconProps = {},
  iconContainerProps = {},
  children,
  ...props
}) {
  if (!href && (placeholder || tooltip)) {
    return (
      <Action disabledAction={!onClick} blink={blink}>
        <Tooltip
          content={placeholder || tooltip}
          hideOnClick={false}
          {...props}
        >
          <IconContainer onClick={onClick} {...iconContainerProps}>
            <Icon {...iconProps} />
            {content !== undefined && (
              <Title unresponsive={unresponsive}>{content}</Title>
            )}
            {moreInfo && <MoreInfoIcon style={{ fontSize: '1.1rem' }} />}
          </IconContainer>
          {children}
        </Tooltip>
      </Action>
    );
  }
  if (onClick) {
    return (
      <Action highlight={highlight} {...props}>
        <IconContainer onClick={onClick} {...iconContainerProps}>
          <Icon {...iconProps} />
          {content !== undefined && (
            <Title unresponsive={unresponsive}>{content}</Title>
          )}
          {moreInfo && <MoreInfoIcon style={{ fontSize: '1.1rem' }} />}
        </IconContainer>
        {children}
      </Action>
    );
  }

  if (href && a && (placeholder || tooltip)) {
    return (
      <ActionA href={href} target="_blank" rel="noopener noreferrer">
        <Tooltip content={placeholder || tooltip}>
          <IconContainer {...iconContainerProps}>
            <Icon {...iconProps} />
            {content !== undefined && (
              <Title unresponsive={unresponsive}>{content}</Title>
            )}
            {moreInfo && <MoreInfoIcon style={{ fontSize: '1.1rem' }} />}
          </IconContainer>
        </Tooltip>
        {children}
      </ActionA>
    );
  }

  if (href && (placeholder || tooltip)) {
    return (
      <ActionLink to={href} {...props}>
        <Tooltip content={placeholder || tooltip}>
          <IconContainer>
            <Icon {...iconProps} />
            {content !== undefined && (
              <Title unresponsive={unresponsive}>{content}</Title>
            )}
            {moreInfo && <MoreInfoIcon style={{ fontSize: '1.1rem' }} />}
          </IconContainer>
        </Tooltip>
        {children}
      </ActionLink>
    );
  }

  return (
    <ActionLink to={href} {...props}>
      <IconContainer {...iconContainerProps}>
        <Icon {...iconProps} />
        {content !== undefined && (
          <Title unresponsive={unresponsive}>{content}</Title>
        )}
        {moreInfo && <MoreInfoIcon style={{ fontSize: '1.1rem' }} />}
      </IconContainer>
      {children}
    </ActionLink>
  );
}

export default ActionComponent;
