import React from "react";
import cx from "classnames";

import './Tabs.scss';

type TabsProps = {
  data: FormGeneratorTab[];
  activeTabId: string;
  onSetTab: Functionable<string>;
}

export default function Tabs({ data, activeTabId,  onSetTab }: TabsProps): JSX.Element {
  return (
    <div className="tabs">
      {data.map(({ id, title }) => (
        <div
          key={id}
          onClick={() => onSetTab(id)}
          className={cx("tab", {tab_active:activeTabId === id })}
        >
          {title}
        </div>
      ))}
    </div>
  )
}
