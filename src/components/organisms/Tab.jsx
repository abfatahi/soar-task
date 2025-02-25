import { useState } from "react";
import styled from "styled-components";

const Tabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <TabButton
            key={index}
            active={activeTab === index}
            onClick={() => setActiveTab(index)}
          >
            {tab.label}
          </TabButton>
        ))}
      </TabList>
      <TabContent>{tabs[activeTab].content}</TabContent>
    </TabsContainer>
  );
};

export default Tabs;

const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--color-white);
  padding: 1.5rem;
  border-radius: 25px;
`;

const TabList = styled.div`
  display: flex;
  border-bottom: 1px solid var(--color-primary-lightest);
`;

const TabButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  background: none;
  outline: none;
  transition: all 0.3s ease;
  color: var(--color-primary-light);

  ${({ active }) =>
    active &&
    `
    border-bottom: 3px solid var(--color-primary);
    color:var(--color-primary);
    
  `}

  &:hover {
    opacity: 0.8;
  }
`;

const TabContent = styled.div`
  padding: 20px;
  border-top: none;
`;
