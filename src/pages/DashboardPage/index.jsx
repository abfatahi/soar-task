import { useEffect, useState } from "react";

import { DashboardLayout } from "@components/layouts";

// Api calls
import { getCards } from "../../services/apis/cards";

import { maskCardNumber } from "@/services/helpers/string";

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
          {cards?.map((card) => (
            <div>
              <p>Balance: {card.availableBalance}</p>
              <p>Card Holder: {card.holder}</p>
              <p>Card Number: {maskCardNumber(card.number)}</p>
              <p>Valid Thru: {card.expiryDate}</p>
              <br />
            </div>
          ))}
        </>
      }
    </DashboardLayout>
  );
}

export default DashboardPage;
