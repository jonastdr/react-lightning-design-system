import React from 'react';

import { Tabs, Tab, SalesPath, MenuItem, Icon } from 'react-lightning-design-system';

const { PathItem } = SalesPath;

function createMenu() {
  return [1, 2, 3].map(i => <MenuItem key={i}>Item #{i}</MenuItem>);
}

const CustomTabItemContent = (props) => {
  /* eslint-disable react/prop-types */
  const {
    activeKey, activeTabRef, eventKey, icon, title,
    onTabClick, onTabKeyDown,
  } = props;
  /* eslint-enable react/prop-types */
  const isActive = eventKey === activeKey;
  return (
    <a
      role='tab'
      ref={ isActive ? activeTabRef : undefined }
      style={ { opacity: isActive ? 1.0 : 0.5, border: 0 } }
      tabIndex={ isActive ? 0 : -1 }
      aria-selected={ isActive }
      onClick={ () => onTabClick(eventKey) }
      onKeyDown={ e => onTabKeyDown(eventKey, e) }
    >
      <Icon icon={ icon } size='small' />
      <span className='slds-p-horizontal--x-small'>{ title }</span>
    </a>
  );
};

export default class TabsExamples extends React.Component {
  constructor() {
    super();
    this.state = { activeKey: 1 };
  }

  onTabSelect(key) {
    this.setState({ activeKey: key });
  }

  render() {
    const styles = { padding: '12px' };
    return (
      <div>
        <h2 className='slds-m-vertical--medium'>Default Tabs</h2>
        <div style={ styles }>
          <Tabs type='default' defaultActiveKey={1}>
            <Tab eventKey={1} title='Tab #1'>This is in tab #1</Tab>
            <Tab eventKey={2} title='Tab #2'>This is in tab #2</Tab>
            <Tab eventKey={3} title='Tab #3'>This is in tab #3</Tab>
          </Tabs>
        </div>
        <h2 className='slds-m-vertical--medium'>Scoped Tabs</h2>
        <div style={ styles }>
          <Tabs
            type='scoped'
            activeKey={ this.state.activeKey }
            onSelect={ this.onTabSelect.bind(this) }
          >
            <Tab eventKey={1} title='Tab #1'>This is in tab #1</Tab>
            <Tab eventKey={2} title='Tab #2'>This is in tab #2</Tab>
            <Tab eventKey={3} title='Tab #3'>This is in tab #3</Tab>
          </Tabs>
        </div>
        <h2 className='slds-m-vertical--medium'>Tab with Dropdown Menu</h2>
        <div style={ styles }>
          <Tabs type='default' defaultActiveKey={1}>
            <Tab eventKey={1} title='Tab #1' menuItems={ createMenu() }>This is in tab #1</Tab>
            <Tab eventKey={2} title='Tab #2' menuItems={ createMenu() }>This is in tab #2</Tab>
            <Tab eventKey={3} title='Tab #3' menuItems={ createMenu() }>This is in tab #3</Tab>
          </Tabs>
        </div>
        <h2 className='slds-m-vertical--medium'>Tab with Dropdown Menu (scoped)</h2>
        <div style={ styles }>
          <Tabs type='scoped' defaultActiveKey={1}>
            <Tab eventKey={1} title='Tab #1' menuIcon='settings' menuItems={ createMenu() }>
              This is in tab #1
            </Tab>
            <Tab eventKey={2} title='Tab #2' menuIcon='settings' menuItems={ createMenu() }>
              This is in tab #2
            </Tab>
            <Tab eventKey={3} title='Tab #3' menuIcon='settings' menuItems={ createMenu() }>
              This is in tab #3
            </Tab>
          </Tabs>
        </div>
        <h2 className='slds-m-vertical--medium'>Tab with custom tab item content</h2>
        <div style={ styles }>
          <Tabs type='default' defaultActiveKey={1}>
            <Tab eventKey={1} title='Tab #1' icon='standard:account' tabItemRenderer={ CustomTabItemContent }>
              This is in tab #1
            </Tab>
            <Tab eventKey={2} title='Tab #2' icon='standard:contact' tabItemRenderer={ CustomTabItemContent }>
              This is in tab #2
            </Tab>
            <Tab eventKey={3} title='Tab #3' icon='standard:opportunity' tabItemRenderer={ CustomTabItemContent }>
              This is in tab #3
            </Tab>
          </Tabs>
        </div>
        <h2 className='slds-m-vertical--medium'>Sales Path</h2>
        <div style={ styles }>
          <SalesPath
            defaultActiveKey={2}
            activeKey={ this.state.salesPathActiveKey }
            onSelect={ item => this.setState({ salesPathActiveKey: item }) }
          >
            <PathItem eventKey={1} title='Draft' completedTitle='Draft Complete' />
            <PathItem eventKey={2} title='Active' />
            <PathItem eventKey={3} title='Complete' />
          </SalesPath>
        </div>
      </div>
    );
  }
}
