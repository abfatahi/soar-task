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
            onClick={() => setActiveTab(index)}
            className={activeTab === index ? "active" : ""}
          >
            <h2>{tab.label}</h2>
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
  min-height: 717px;
  background: var(--color-white);
  padding: 1.5rem;
  border-radius: 25px;

  .active {
    border-bottom: 3px solid var(--color-primary);

    h2 {
      color: var(--color-primary);
    }
  }
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
  border-bottom: 3px solid var(--color-white);

  h2 {
    font-family: Inter, sans-serif;
    color: var(--color-primary-light);
    font-size: 16px;
    font-weight: 500;

    @media (max-width: 425px) {
      font-size: 13px;
    }
  }

  &:hover {
    opacity: 0.8;
  }
`;

const TabContent = styled.div`
  padding: 2rem 0 1rem 2rem;
  border-top: none;

  @media (max-width: 768px) {
    padding: 3rem 0;
  }
`;
