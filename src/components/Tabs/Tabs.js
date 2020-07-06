import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './Tabs.scss';
import { useCurrentTabConfig } from './TabsContext';
import config, { getCurrentTabIds } from '../../config';


export default props => {
  const [ currentTabConfig, setCurrentTabConfig ] = useCurrentTabConfig();
  const onClick = id => setCurrentTabConfig({id, ...config.tabInfos[id]});

  return (
    <div className="tabs">
      <Nav tabs>
        { getCurrentTabIds().map(id => {
          const tabInfo = config.tabInfos[id];

          return (
            <NavItem key={id}>
              <NavLink className={(currentTabConfig.id === id) ? 'active' : null} onClick={onClick.bind(null, id)} aria-label={`${tabInfo.name} Tab`}>
                {tabInfo.name}
              </NavLink>
            </NavItem>
          );
        }) }
      </Nav>
    </div>
  );
}
