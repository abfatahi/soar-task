import LiviaImage from "@assets/images/livia.png";
import RandyImage from "@assets/images/randy.png";
import JohnImage from "@assets/images/john.png";
import AvatarImage from "@assets/images/avatar.png";

const transactions = [
  {
    type: "credit",
    description: "Jemi Wilson",
    provider: "venmo",
    date: "2021-01-21",
    amount: "5400",
    to: "3000000001",
    from: "3000000008",
  },
  {
    type: "credit",
    description: "Deposit Paypal",
    provider: "paypal",
    date: "2021-01-25",
    amount: "2500",
    to: "3000000001",
    from: "3000000008",
  },
  {
    type: "debit",
    description: "Deposit from my card",
    provider: "card",
    date: "2021-01-28",
    amount: "850",
    from: "3000000001",
    to: "3000000008",
  },
];

const beneficiaries = [
  {
    name: "Livia Bator",
    accountNumber: "3000000002",
    title: "CEO",
    profilePicture: LiviaImage,
  },
  {
    name: "Randy Press",
    accountNumber: "3000000003",
    title: "Director",
    profilePicture: RandyImage,
  },
  {
    name: "John Work",
    accountNumber: "3000000004",
    title: "Designer",
    profilePicture: JohnImage,
  },
  {
    name: "John Doe",
    accountNumber: "3000000005",
    title: "CFO",
    profilePicture: AvatarImage,
  },
  {
    name: "Sarah Doe",
    accountNumber: "3000000006",
    title: "HRM",
    profilePicture: AvatarImage,
  },
];

export { transactions, beneficiaries };
