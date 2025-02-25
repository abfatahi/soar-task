import { useEffect, useState } from "react";

import { DashboardLayout } from "@components/layouts";

// Api calls
import { getCards } from "../../services/apis/cards";

import { CreditCard } from "../../components/molecules";

function DashboardPage() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getCards().then((res) => {
      setCards(res.data);
    });
  }, []);

  return (
    <DashboardLayout>
      {
        <>
          <section>
            {cards?.map((card, index) => (
              <CreditCard key={`card-${index}`} {...card} />
            ))}
          </section>
        </>
      }
    </DashboardLayout>
  );
}

export default DashboardPage;
